import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class GlobalCorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration configuration = new CorsConfiguration();
        // Разрешить все заголовки
        configuration.addAllowedHeader("*");
        // Разрешить все методы (GET, POST, PUT, DELETE и т.д.)
        configuration.addAllowedMethod("*");
        // Разрешить запросы с любых источников
        configuration.addAllowedOriginPattern("*"); // Используйте addAllowedOrigin("*") для старых версий Spring
        configuration.setAllowCredentials(true); // Разрешить использование cookie, если необходимо

        // Применить конфигурацию ко всем маршрутам
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return new CorsFilter(source);
    }
}
