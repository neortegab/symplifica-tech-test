package com.symplifica.techtest;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .formLogin((form) -> form.loginPage("/login").permitAll())
                .authorizeHttpRequests((authorize) ->
                        authorize
                            .anyRequest().authenticated());
        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService users(){
        var userBuilder = User.builder();
        var user = userBuilder.username("testUser").passwordEncoder((encoder) -> passwordEncoder().encode("testPassword!")).roles("USER", "ADMIN").build();
        return new InMemoryUserDetailsManager(user);
    }
}
