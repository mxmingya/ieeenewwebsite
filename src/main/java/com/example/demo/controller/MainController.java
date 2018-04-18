package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by mingyama on 4/7/18.
 */

@Controller
public class MainController {

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
}
