import CommandRegistry from './CommandRegistry';
import EchoCommand from '../EchoCommand';
import SayCommand from '../SayCommand';
import SkipCommand from '../SkipCommand';
import PauseCommand from '../PauseCommand';
import XCommand from '../XCommand';
import AddXCommand from '../AddXCommand';
import SearchCommand from '../SearchCommand';
import QueueCommand from '../QueueCommand';
import QueueNextCommand from '../QueueNextCommand';
import ListCommand from '../ListCommand';
import AddCommand from '../AddCommand';
import HelpCommand from '../HelpCommand';
import XListCommand from '../XListCommand';
import VolumeCommand from '../VolumeCommand';
import ResumeCommand from '../ResumeCommand';

function initialize() {
  CommandRegistry.register(EchoCommand);
  CommandRegistry.register(SayCommand);
  CommandRegistry.register(SkipCommand);
  CommandRegistry.register(XCommand);
  CommandRegistry.register(AddXCommand);
  CommandRegistry.register(SearchCommand);
  CommandRegistry.register(QueueCommand);
  CommandRegistry.register(ListCommand);
  CommandRegistry.register(AddCommand);
  CommandRegistry.register(HelpCommand);
  CommandRegistry.register(XListCommand);
  CommandRegistry.register(VolumeCommand);
  CommandRegistry.register(ResumeCommand);
  CommandRegistry.register(PauseCommand);
  CommandRegistry.register(QueueNextCommand);
}

export default {
  initialize,
};
