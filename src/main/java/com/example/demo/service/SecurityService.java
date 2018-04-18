package com.example.demo.service;

import org.springframework.stereotype.Component;

public interface SecurityService {
    String findLoggedInUsername();

    boolean autologin(String username, String password);
}

