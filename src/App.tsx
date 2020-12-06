import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import {Typography} from "@material-ui/core";

// supplied by the build command in netlify.toml
const gitCommit = process.env.REACT_APP_COMMIT_REF;

// const log = console;

export function App(){
  const sourceUrl =
    `https://github.com/shorn/mui-scrolljump/tree/${gitCommit}/src/App.tsx`;
  return <>
    <CssBaseline/>
    <Typography paragraph>
      mui-scrolljump example project
    </Typography>
    <Typography paragraph>
      Source on <a href={sourceUrl}>Github</a>,
      built from commit: {gitCommit}
    </Typography>
  </>;
}

