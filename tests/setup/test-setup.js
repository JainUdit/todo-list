import Enzyme, { shallow, render, mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
export { shallow, mount, render, ReactWrapper };
export default Enzyme;