package com.supinfo.jee.casino.api;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(value = "gamblerapi", url = "http://localhost:8081/")
public interface GamblerApi {
    @PostMapping("/register")
    GamblerOutputDto register(@RequestBody GamblerInputDto newGambler);
}
