import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import data from '../fixtures/data';
import files from '../fixtures/files';
import '../support/paramaters.js';
import { generateId } from '../support/util';
import cs from '../constants';
import PageManager from '../page-objects/PageManager';
import GenericPage from '../page-objects/GenericPage';
import ProjectPage from '../page-objects/ProjectPage';

let pm = new PageManager([cs.po.gp, cs.po.pp]);
let gp = pm.pages[cs.po.gp] as GenericPage;
let pp = pm.pages[cs.po.pp] as ProjectPage;
