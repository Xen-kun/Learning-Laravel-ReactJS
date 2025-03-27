<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');


// Route::get('/', function () {
//     sleep(1); //progress indication lang nukwa etuy
//     //nu met kayat mo i render ni component, ken ikkam iti props na and declare as string
//     return Inertia::render('Home', ['name' => 'Banoog']);
// });

// Route::get('/create', function () {
//     sleep(1); //progress indication lang nukwa etuy
//     //nu met kayat mo i render ni component, ken ikkam iti props na and declare as string
//     return Inertia::render('Create', ['name' => 'Kupal']);
// });


// //this route is just to show how pages work on inertia js from folders
// //etuy nga route ket ipakpakita na lang nu kasanu nga ag work jai other pages kenni intertia from folders
// // Route::get('/about', function(){
// //     return inertia('About/About');
// // });

// Route::get('/about', function () {
//     sleep(1); //progress indication lang nukwa etuy
//     //nu met kayat mo i render ni component, ken ikkam iti props na and declare as string
//     return Inertia::render('Create', ['name' => 'Suyot']);
// });