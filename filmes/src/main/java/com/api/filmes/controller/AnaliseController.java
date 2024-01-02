package com.api.filmes.controller;


import java.util.ArrayList;
import java.util.List;
import com.api.filmes.model.Analise;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/analises")
public class AnaliseController {


    private List<Analise> analises = new ArrayList<>();
    private int proximoId = 1;


     @GetMapping("")
    public List<Analise> buscaAnalise(){

        return analises;
    }

    @GetMapping("{id}")
    public Analise buscaAnalisePorId(@PathVariable int id){


        for(Analise analise : analises){

            if(analise.getId() == id){

                return analise;
            }

        }
        return null;
    }

    @PostMapping("")
    public Analise novaAnalise(@RequestBody Analise analise){

        analise.setId(proximoId++);
        analises.add(analise);
        return analise;

    }

   
}
