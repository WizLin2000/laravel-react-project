<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lunchbox;
use Illuminate\Support\Facades\Log;
class BentoController extends Controller
{
    public function getdb(){
        try{

        
        $bento=Lunchbox::all();
        return response()->json($bento);
        }catch(\Exception $e){
            Log::error('取得便當資料錯誤: ' . $e->getMessage());
            return response()->json(['error' => '內部伺服器錯誤'], 500);
        }
    }
    public function getbentodetail($id){
        $bento=Lunchbox::where('bentos_id',$id)->first();
        if(!$bento){
            return response()->json(['message'=>'便當不存在'],404);
        }
        return response()->json($bento,200);
    }
}
