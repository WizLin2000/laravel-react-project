<?php

// namespace App\Http\Controllers;
// use Illuminate\Support\Facades\Auth;
// use Illuminate\Http\Request;

// class AuthController extends Controller
// {
//     // public function login(Request $request){
//     //     $credentials=$request->validate([
//     //         'name'=>'required|string',
//     //         'password'=>'required|string',
//     //     ]);

        
//     //     if(!Auth::attempt(['name'=>$credentials['name'],'password'=>$credentials['password']])){
//     //         return response()->json([
//     //             'status'=>'error',
//     //             'message'=>'Invalid credentials',
//     //         ],401);
//     //     }
//     //     $user=Auth::user();
//     //     $request->session()->regenerate();

//     //     return response()->json([
//     //         'status' => 'success',
//     //             'message' => 'Login successful.',
//     //             'data' => [
//     //                 'id'=>$user->id,
//     //                 'name' => $user->name,
//     //                 // 'token' => $token,
//     //             ],    
//     //         ],200);

//     // }
    #chatGPT
    
    namespace App\Http\Controllers;

    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Auth;
    use Illuminate\Support\Facades\Hash;
    use App\Models\Customer;
// class AuthController extends Controller{
//     public function login(Request $request)
//     {
//         // 驗證輸入欄位
//         $request->validate([
//             'customer_acc' => 'required|string|max:255',
//             'password' => 'required|string|max:255',
//         ]);

//         // 查詢使用者
//         $user = Customer::where('customer_account', $request->customer_acc)->first();

//         if (!$user || !Hash::check($request->password, $user->customer_password)) {
//             return response()->json(['message' => '登入失敗，帳號或密碼錯誤'], 401);
//         }
//         //添加的3 lines
//         session(['user_acc'=>$user->customer_account,'user_name'=>$user->customer_name]);
//         $request->session()->regenerate();

//         // 驗證成功，返回成功訊息
//         return response()->json([
//             'message' => '登入成功',
//             'redirect_url'=>'/catalog',
//             'user' => [
//                 'acc' => $user->customer_account,
//                 'name' => $user->customer_name,
                
//             ],
//             'customer_acc'=> $user->customer_account,
//             'session'=>session()->all(),
//         ], 200);
//     }
// }

//ChatGPT1
use Illuminate\Support\Facades\DB;
use App\Http\Requests\LoginRequest;
use App\Services\AuthService;

class AuthController extends Controller {
    protected $authService;

    public function __construct(AuthService $authService){
        $this->authService=$authService;
    }

    public function login(LoginRequest $request){
        $response=$this->authService->login($request->validated());

        return response()->json([
            'success'=>$response['success'],
            'message'=>$response['message']
        ],$response['status']);
    }
}