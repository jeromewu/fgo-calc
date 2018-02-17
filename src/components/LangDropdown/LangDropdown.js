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

const LangDropdown = ({ onItemClick }) => (
  <Dropdown
    style={styles.container}
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
};

LangDropdown.defaultProps = {
  onItemClick: () => () => {},
};

export default LangDropdown;
