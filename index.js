/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import App from './App';
import Router from './Router';
import Headlines from './HeadLines';
import HeadlinesDetail from './HeadLinesDetail';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
