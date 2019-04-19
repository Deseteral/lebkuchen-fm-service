package xyz.deseteral.lebkuchenfm.commands;

import org.springframework.stereotype.Component;
import xyz.deseteral.lebkuchenfm.domain.CommandProcessingResponse;

import java.util.List;
import java.util.Optional;

@Component
class PingCommand implements CommandProcessor {
    @Override
    public CommandProcessingResponse process(List<String> args) {
        return new CommandProcessingResponse("pong");
    }

    @Override
    public String getKey() {
        return "ping";
    }

    @Override
    public Optional<String> getShortKey() {
        return Optional.empty();
    }

    @Override
    public String getHelpMessage() {
        return "Ping pongs you";
    }
}