import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

const langs = [
  {
    key: 'zh-tw', label: '繁體中文',
  },
  {
    key: 'en', label: 'English',
  },
];

const WhiteDropdown = styled(Dropdown)`
  color: white;
  margin-right: 8px;
`;

const LangDropdown = ({ onItemClick }) => (
  <WhiteDropdown
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
  </WhiteDropdown>
);

LangDropdown.propTypes = {
  onItemClick: PropTypes.func,
};

LangDropdown.defaultProps = {
  onItemClick: () => () => {},
};

export default LangDropdown;
