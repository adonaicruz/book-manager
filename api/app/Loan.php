<?php namespace App;
  
use Illuminate\Database\Eloquent\Model;
  
class Loan extends Model{
     protected $fillable = ['book_id', 'user', 'returned']; 
}