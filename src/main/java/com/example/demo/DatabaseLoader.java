package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Created by mingyama on 4/7/18.
 */
@Component
public class DatabaseLoader implements CommandLineRunner {

    private final MemberRepository repository;

    @Autowired
    public DatabaseLoader(MemberRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Member("Mingya Ma"));
    }
}
