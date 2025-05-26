<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use illuminate\Database\Eloquent\Model;
use App\Models\Order;
use Illuminate\Support\Carbon;
use App\Models\Lunchbag;

class Ordercontroller extends Controller
{
public function store(Request $request){



    try {
        // 確保 order_date 正確
        $order_date = $request->has('order_date') && !empty($request->order_date)
            ? Carbon::parse($request->order_date)
            : Carbon::now();
    } catch (\Exception $e) {
        return response()->json(['error' => '無效的訂單日期格式', 'details' => $e->getMessage()], 400);
    }

    try {
        // **建立訂單**
        $order = Order::create([
            'order_date' => $order_date,
            'customer_acc' => $request->customer_acc,
        ]);

        // **檢查 items 是否存在**
        if (!isset($request->items) || !is_array($request->items)) {
            return response()->json(['error' => 'items 格式錯誤'], 400);
        }

        // **新增便當到 Lunchbag**
        foreach ($request->items as $item) {
            if (!isset($item['id']) || !isset($item['quantity'])) {
                return response()->json(['error' => 'items 內部格式錯誤', 'item' => $item], 400);
            }

            Lunchbag::create([
                'order_id' => $order->id,
                'quantity' => $item['quantity'],
                'lunchbox_id' => $item['id']
            ]);
        }

        return response()->json([
            'message' => '訂單已成功新增',
            'orders_id' => $order->id,
            'order_date' => $order->order_date,
        ], 201);
    } catch (\Exception $e) {
        return response()->json([
            'error' => '無法建立訂單',
            'exception' => $e->getMessage(),
            'line' => $e->getLine(),
            'file' => $e->getFile()
        ], 500);
    }
}
    }


