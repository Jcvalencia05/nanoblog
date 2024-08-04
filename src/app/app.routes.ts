import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { combineLatest } from 'rxjs';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

export const routes: Routes = [
    {
        path:'lista',
        component: ListaArticulosComponent
    },
    {
        path:'create-post',
        component: CreatePostComponent
    }
];
