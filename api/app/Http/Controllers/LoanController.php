<?php
  
namespace App\Http\Controllers;
  
use App\Loan;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
  
  
class LoanController extends Controller{
  
  
    public function index(){
        $Loans  = Loan::with('book')->get();
  
        return response()->json($Loans);
  
    }
  
    public function get($id){
  
        $row  = Loan::find($id);
  
        return response()->json($row);
    }
  
    public function create(Request $request){
        $row = Loan::create($request->all());
  
        return response()->json($row);
  
    }
  
    public function delete($id){
        $row  = Loan::find($id);
        $row->delete();
 
        return response()->json('deleted');
    }
  
    public function update(Request $request,$id){
        $row  = Loan::find($id);
        $row->book_id = $request->input('book_id');
        $row->user = $request->input('user');
        
        if($row->returned == false && $request->input('returned') == true){
            $row->returned_date = date_create('now')->format('Y-m-d H:i:s');
        }
        $row->returned = $request->input('returned');
        $row->save();
  
        return response()->json($row);
    }
  
}