package org.example.kioback.cors;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000") // React 주소
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }
}

//리엑트와 스프링의 포트가 다르기 때문에  CORS(Cross-Origin Resource Sharing) 설정이 필요하다.