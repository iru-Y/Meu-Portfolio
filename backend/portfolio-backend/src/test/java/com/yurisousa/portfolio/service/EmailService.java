package com.yurisousa.portfolio.service;

import com.yurisousa.portfolio.dto.ContactFormDto;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private JavaMailSender javaMailSender;

    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendContactEmail (ContactFormDto contactFormDto){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo();
        message.setSubject("Nova mensagem do contato: " + contactFormDto.subject());
        message.setText(
                "Nome: " + contactFormDto.name() + "\n" +
                        "Telefone: " + contactFormDto.phone() + "\n" +
                        "Email: " + contactFormDto.email() + "\n\n" +
                        "Mensagem:\n" + contactFormDto.message()
        );
        javaMailSender.send(message);
    }

}
