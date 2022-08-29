import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import Divider from '@mui/material/Divider';
import Test from './Test';
import data from "./data.json";

const initialItems = data;

function App(props) {
  const [items, setItems] = useState(initialItems);
  const click = () => {
    setItems([...items, { id: items.length + 1, title: "New item" }])
  };
  return (
    <div>
      <Button variant="contained" onClick={click}>Hello World</Button>
      <Box>
        <List>
          {items.map(item =>
          (<ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>))}
        </List>
      </Box>
    </div>
  );
}

export default App;
