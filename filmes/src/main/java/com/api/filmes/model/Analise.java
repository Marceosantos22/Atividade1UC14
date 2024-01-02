package com.api.filmes.model;

import org.springframework.stereotype.Component;

@Component
public class Analise {
    

    private int id;
    private String filme;
    private String analiseUser;
    private int nota;
    private int codFilme;


    public Analise(){}


    public Analise(int id, String filme, String analiseUser, int nota, int codFilme) {
        this.id = id;
        this.filme = filme;
        this.analiseUser = analiseUser;
        this.nota = nota;
        this.codFilme = codFilme;
    }


    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id = id;
    }


    public String getFilme() {
        return filme;
    }


    public void setFilme(String filme) {
        this.filme = filme;
    }


    public String getAnalise() {
        return analiseUser;
    }


    public void setAnalise(String analiseUser) {
        this.analiseUser = analiseUser;
    }


    public int getNota() {
        return nota;
    }


    public void setNota(int nota) {
        this.nota = nota;
    }


    public int getCodFilme() {
        return codFilme;
    }


    public void setCodFilme(int codFilme) {
        this.codFilme = codFilme;
    }    

    
}
