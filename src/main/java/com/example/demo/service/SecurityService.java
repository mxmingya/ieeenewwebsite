package com.example.demo.service;


public interface SecurityService {
    String findLoggedInUsername();

    boolean autologin(String username, String password);
}

