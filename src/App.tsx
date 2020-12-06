import CssBaseline from '@material-ui/core/CssBaseline';
import React, {useState} from 'react';
import {
  Button,
  Container,
  Divider,
  List,
  ListItemText,
  SwipeableDrawer,
  Typography
} from "@material-ui/core";

// supplied by the build command in netlify.toml
const gitCommit = process.env.REACT_APP_COMMIT_REF ?? 'main';

// const log = console;

export function App(){
  return <Container>
    <CssBaseline/>
    <IntroContent/>
    <DynamicContent/>
  </Container>;
}

function DynamicContent(){
  const [isLong, setIsLong] = useState(false);
  return <>
    <Divider style={{margin: "1em"}}/>

    <Typography paragraph>
      Toggling the content <i>before</i> showing the menu, you can see the
      content stays "stable" and the scrollbar toggles between
      enabled / disabled.
    </Typography>
    <Button variant="outlined" onClick={() => setIsLong(!isLong)}>
      {isLong ? "long content" : "short content"}
    </Button>

    <Divider style={{margin: "1em"}}/>

    <Typography paragraph>
      After showing the menu, toggling the content length makes the content
      "jump" left and right as the scrollbar toggles between visible/invisible.
    </Typography>
    <Typography paragraph>
      Refresh the browser to reset the scrollbar after showing the menu.
    </Typography>
    <TestMenu/>

    <Divider style={{margin: "1em"}}/>

    {[...Array(isLong ? 100 : 5)].map(() => {
      return <Typography paragraph>content</Typography>
    })}
  </>
}

function TestMenu(){
  const [drawerOpen, setDrawerOpen] = useState(false);
  return <>
    <div>
      <Button variant="outlined" onClick={() => setDrawerOpen(true)}>
        Menu
      </Button>
      <AppDrawer anchor={"left"} open={drawerOpen}
        toggleDrawer={setDrawerOpen}/>
    </div>
  </>
}

function AppDrawer({anchor, open, toggleDrawer}: {
  anchor: 'left' | 'right',
  open: boolean,
  toggleDrawer: (open: boolean) => void,
}){
  const onClose = () => toggleDrawer(false);

  return <SwipeableDrawer
    open={open}
    onClose={onClose}
    onOpen={() => toggleDrawer(true)}
    anchor={anchor}
  >
    <div
      tabIndex={0}
      role="button"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <div style={{width: 250}}>
        <List>
          <ListItemText primary={"Option 1"}/>
          <ListItemText primary={"Option 2"}/>
        </List>
      </div>
    </div>
  </SwipeableDrawer>;
}

function IntroContent(){
  const sourceUrl =
    `https://github.com/shorn/mui-scrolljump/tree/${gitCommit}/src/App.tsx`;
  return <>
    <br/>
    <Typography paragraph>
      mui-scrolljump example project
    </Typography>
    <Typography paragraph>
      Source on <a href={sourceUrl}>Github</a>, built from commit: {gitCommit}
    </Typography>
  </>
}

