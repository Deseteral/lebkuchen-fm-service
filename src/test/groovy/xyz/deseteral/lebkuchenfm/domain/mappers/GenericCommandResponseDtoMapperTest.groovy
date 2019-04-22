package xyz.deseteral.lebkuchenfm.domain.mappers

import spock.lang.Specification
import spock.lang.Unroll
import xyz.deseteral.lebkuchenfm.api.commands.TextIsNotACommandException
import xyz.deseteral.lebkuchenfm.domain.Command
import xyz.deseteral.lebkuchenfm.domain.CommandProcessingResponse
import xyz.deseteral.lebkuchenfm.services.commands.NoSuchCommandException

@Unroll
class GenericCommandResponseDtoMapperTest extends Specification {
    def 'should map from #fromTitle to GenericCommandResponseDto'() {
        when:
        def commandResponseDto = GenericCommandResponseDtoMapper.from(from)

        then:
        commandResponseDto.response == response

        where:
        fromTitle                     | from                                                   || response
        'CommandProcessingResponse'   | new CommandProcessingResponse('some test response')    || 'some test response'
        'TextIsNotACommand exception' | new TextIsNotACommandException()                       || 'Given text is not a command'
        'NoSuchCommand exception'     | new NoSuchCommandException(new Command('testKey', [])) || 'Komenda `testKey` nie istnieje.'
    }
}
