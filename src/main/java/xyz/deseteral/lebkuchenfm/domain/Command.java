package xyz.deseteral.lebkuchenfm.domain;

import java.util.List;

final class Command {
    private final String key;
    private final List<String> args;

    Command(String key, List<String> args) {
        this.key = key;
        this.args = args;
    }

    String getKey() {
        return key;
    }

    List<String> getArgs() {
        return args;
    }
}
