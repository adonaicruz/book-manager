<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class BookTest extends TestCase
{
    use DatabaseTransactions;

    public function testBook()
    {
        $request = $this->call('GET', '/api/v1/book');
        $this->assertEquals(200, $request->status());

        $this->json('POST', '/api/v1/book', ['title' => 'Livro Teste'])
             ->seeJson([
                'title' => 'Livro Teste'
             ]);
        
    }

    public function testLoan()
    {
        $loan = $this->call('GET', '/api/v1/loan');
        $this->assertEquals(200, $loan->status());
        
    }
}
