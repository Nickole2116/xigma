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
        Schema::table('orders', function (Blueprint $table) {
            $table->foreignId('admin_id')->nullable()->index()->after('user_id');
            $table->string('attachment_url')->after('comments')->nullable();
            $table->unsignedTinyInteger('status')->default(1)->after('ref_ticket');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('status');
            $table->dropColumn('attachment_url');
            $table->dropColumn('admin_id');
        });
    }
};
