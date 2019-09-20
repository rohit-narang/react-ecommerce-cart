import React from 'react';
import { Menu, Button, Input, Dropdown, Container } from 'semantic-ui-react';

const Header = () => {
    return (
        <>
        <Menu color='blue' inverted style={{marginBottom: '0px'}}>
            <Menu.Item>
                Our Company
            </Menu.Item>
            <Menu.Item>
                <Input
                    style={{width: '500px'}}
                    size='large'                    
                    label={{ icon: 'asterisk' }}
                    labelPosition='right corner'
                    placeholder='Search...'
                />
            </Menu.Item>
            <Menu.Menu position='right'>
            <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

            <Menu.Item>
                <Button>Log-in</Button>
            </Menu.Item>
            </Menu.Menu>
        </Menu>

        <Menu style={{marginTop: '0px'}} widths={4}>
            <Container>
            <Menu.Item>
            Our Company
        </Menu.Item>

        <Dropdown item text='Category1'>
        <Dropdown.Menu>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>Russian</Dropdown.Item>
          <Dropdown.Item>Spanish</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text='Category2'>
        <Dropdown.Menu>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>Russian</Dropdown.Item>
          <Dropdown.Item>Spanish</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text='Category3'>
        <Dropdown.Menu>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>Russian</Dropdown.Item>
          <Dropdown.Item>Spanish</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </Container>
    </Menu>
    </>
    );
}

export default Header;
