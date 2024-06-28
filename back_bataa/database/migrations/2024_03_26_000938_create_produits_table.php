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
        Schema::create('produits', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('description');
            $table->string('etat_produit');
            $table->decimal('prix_unitaire', 8, 2);
            $table->date('date_expiration');
            $table->integer('valide_produit')->default(0);
            $table->integer('etat_vente')->default(0);
            $table->unsignedBigInteger('scategorieID'); // bech nzid chemp scategorieID w type mte3ou unsignedBigInteger // 5ater hetha type mta id
            $table->foreign('scategorieID') // nheb nraja3 scategorieID cle trangee
            ->references('id') // ipointy al id
            ->on('sous_categories') // al table  categories
            ->onDelete('restrict')
            ->onUpdate('restrict'); // hethom zouz ll cascade
            $table->unsignedBigInteger('utilisateurID'); // bech nzid chemp scategorieID w type mte3ou unsignedBigInteger // 5ater hetha type mta id
            $table->foreign('utilisateurID') // nheb nraja3 scategorieID cle trangee
            ->references('id') // ipointy al id
            ->on('utilisateurs') // al table  categories
            ->onDelete('restrict')
            ->onUpdate('restrict'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produits');
    }
};
