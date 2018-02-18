import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import styles from './styles';

const langs = [
  {
    key: 'zh-tw', label: '繁體中文',
  },
  {
    key: 'en', label: 'English',
  },
];

const LangDropdown = ({ onItemClick, inverted }) => (
  <Dropdown
    style={{
      ...styles.container,
      color: inverted ? 'white' : 'black',
    }}
    text="Language"
  >
    <Dropdown.Menu>
      {
        langs.map(({ key, label }) => (
          <Dropdown.Item
            key={key}
            text={label}
            onClick={onItemClick(key)}
          />
        ))
      }
    </Dropdown.Menu>
  </Dropdown>
);

LangDropdown.propTypes = {
  onItemClick: PropTypes.func,
  inverted: PropTypes.bool,
};

LangDropdown.defaultProps = {
  onItemClick: () => () => {},
  inverted: false,
};

export default LangDropdown;
