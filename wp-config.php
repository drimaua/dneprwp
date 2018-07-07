<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dnepr_wp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '1C+^3RNr;,z-n=e9s#$]94IA1lm0zy~&LT[XIe3j~_hlw+,XUUg-m9`%83AA(dBr');
define('SECURE_AUTH_KEY',  'X!TW#mt-Nv)vtJpqQ[rh2L$v}qYx_?GHV?T:{:$<[rv=d82Rt<N~Ft7:%+O/ee7z');
define('LOGGED_IN_KEY',    '_0j*UvA%+t:P;#%[C;{,CO^rfS4n6UM/4p 7[}2fKQFQXtB}[vGx1J>,GK]!*TSS');
define('NONCE_KEY',        '75PYR.~ax{511@@GJ1dT`WnbH&,`FA },m5%pj!`u;twco$R&$S1wj7QO%W3NGd.');
define('AUTH_SALT',        'F{k717@U}I,?`R3YB;K-4K17atgmVkbw~NS1,bKy[:/Vs1w2+ygE|n1JFb5yxU?X');
define('SECURE_AUTH_SALT', 'gL]Nv>:Iq&e$l#gkwx{<#ucYAt>tO[Kzmi4dtH=Rwq,hi&D2-m2Y-nR0lg-iI$]5');
define('LOGGED_IN_SALT',   '-5(,|6?i=&IeF8ZWo;$dH/RU>!=Du>[Id:[Z]QYi:bIT&YSC!z:&!QlAarIjcTCc');
define('NONCE_SALT',       'op~@zC}Q9n$.:<d`}-yUgNK6;5/VpWd_OL[g~_aLDWu9W)s^(Y1u@)`}.0p7V5;U');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
