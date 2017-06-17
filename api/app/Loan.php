<?php 
namespace App;
  
use Illuminate\Database\Eloquent\Model;
  
class Loan extends Model{
     protected $fillable = ['book_id', 'user', 'returned', 'returned_date']; 

     public function book(){
        return $this->hasOne('App\Book','id','book_id');
    }
}