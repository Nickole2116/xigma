<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('category', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('status')->default(1);
            $table->longText('category_name');
            $table->integer('created_by');
            $table->timestamps();
        });

        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('status')->default(1);
            $table->longText('projects_name');
            $table->integer('order_id');
            $table->integer('category_id');
            $table->foreignId('admin_id')->nullable()->index();
            $table->string('users_id')->nullable();
            $table->foreignId('created_by')->nullable()->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
