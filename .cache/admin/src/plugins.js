
import contentTypeBuilder from '../../../node_modules/@strapi/plugin-content-type-builder/strapi-admin.js';
import email from '../../../node_modules/@strapi/plugin-email/strapi-admin.js';
import upload from '../../../node_modules/@strapi/plugin-upload/strapi-admin.js';
import usersPermissions from '../../../node_modules/@strapi/plugin-users-permissions/strapi-admin.js';
import documentation from '../../../node_modules/@strapi/plugin-documentation/strapi-admin.js';
import i18N from '../../../node_modules/@strapi/plugin-i18n/strapi-admin.js';
<<<<<<< HEAD
import configSync from '../../../node_modules/strapi-plugin-config-sync/strapi-admin.js';
=======
>>>>>>> master


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'users-permissions': usersPermissions,
  'documentation': documentation,
  'i18n': i18N,
<<<<<<< HEAD
  'config-sync': configSync,
=======
>>>>>>> master
};

export default plugins;
