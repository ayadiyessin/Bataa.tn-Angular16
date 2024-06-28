-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 04 mai 2024 à 00:22
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `db_bata_2`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nomcategorie` varchar(255) NOT NULL,
  `Archivecategorie` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `nomcategorie`, `Archivecategorie`, `created_at`, `updated_at`) VALUES
(1, 'Moyen de Transport', 0, '2024-04-27 09:38:38', '2024-04-27 09:38:38'),
(2, 'Matériel Informatique', 0, '2024-04-27 09:39:04', '2024-04-27 09:39:04'),
(3, 'Immobilier', 0, '2024-04-27 09:39:21', '2024-04-27 09:39:21');

-- --------------------------------------------------------

--
-- Structure de la table `encheres`
--

CREATE TABLE `encheres` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `conf` int(11) NOT NULL DEFAULT 0,
  `prix_vente` decimal(8,2) NOT NULL,
  `produitID` bigint(20) UNSIGNED NOT NULL,
  `utilisateurID` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `encheres`
--

INSERT INTO `encheres` (`id`, `conf`, `prix_vente`, `produitID`, `utilisateurID`, `created_at`, `updated_at`) VALUES
(1, 1, 1320.00, 3, 6, '2024-04-28 11:49:55', '2024-04-28 11:49:55'),
(5, 0, 660.00, 5, 6, '2024-04-28 12:04:28', '2024-04-28 12:04:28'),
(6, 1, 726.00, 5, 4, '2024-04-28 12:05:20', '2024-04-28 12:05:20'),
(7, 0, 418000.00, 8, 6, '2024-04-28 12:18:16', '2024-04-28 12:18:16'),
(9, 0, 462000.00, 10, 6, '2024-04-29 09:36:34', '2024-04-29 09:36:34');

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_03_25_234027_create_categories_table', 1),
(6, '2024_03_25_234714_create_sous_categories_table', 1),
(7, '2024_03_26_000439_create_utilisateurs_table', 1),
(8, '2024_03_26_000938_create_produits_table', 1),
(9, '2024_03_26_002532_create_encheres_table', 1),
(10, '2024_03_26_002954_create_photos_table', 1);

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'token-name', '164a23c43077ca6602aef9920caa1a3e99a6eeb5393794ff4b517c2838eb6f59', '[\"*\"]', NULL, NULL, '2024-04-27 09:37:52', '2024-04-27 09:37:52'),
(2, 'App\\Models\\User', 1, 'token-name', '562c07e8bce3abecb87b591aa21ea8aac1cdbb32dbd7a1a8993c2ddeb21ca1f9', '[\"*\"]', NULL, NULL, '2024-04-27 11:16:24', '2024-04-27 11:16:24'),
(3, 'App\\Models\\User', 1, 'token-name', '17943e3b0afeeee1746ed54bbc2a61cf580bf97d3582f6e66353a3d6221c1008', '[\"*\"]', NULL, NULL, '2024-04-28 10:59:52', '2024-04-28 10:59:52'),
(4, 'App\\Models\\User', 1, 'token-name', 'c211ab372b25c4c8167bd7fefab28e7cdad988a589bf3dc96607c6d4f33fa045', '[\"*\"]', NULL, NULL, '2024-04-29 09:41:46', '2024-04-29 09:41:46');

-- --------------------------------------------------------

--
-- Structure de la table `photos`
--

CREATE TABLE `photos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `lien_photo` varchar(255) NOT NULL,
  `produitID` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `photos`
--

INSERT INTO `photos` (`id`, `lien_photo`, `produitID`, `created_at`, `updated_at`) VALUES
(1, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714217762/images/g1vxblioemqazm5xub9d.jpg', 2, '2024-04-27 10:36:07', '2024-04-27 10:36:07'),
(2, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714217762/images/jycmh803fxxpgcstk5uc.jpg', 2, '2024-04-27 10:36:07', '2024-04-27 10:36:07'),
(3, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714217762/images/yyd9l3ii6mpbbwlnlnay.jpg', 2, '2024-04-27 10:36:07', '2024-04-27 10:36:07'),
(4, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714217763/images/w1nn2vk8zpsbwohtz3rr.jpg', 2, '2024-04-27 10:36:08', '2024-04-27 10:36:08'),
(5, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714219472/images/ponhzod180ahuwu7bpv4.jpg', 3, '2024-04-27 11:04:42', '2024-04-27 11:04:42'),
(6, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714219472/images/v9vx6pjfgxklkdeau5we.jpg', 3, '2024-04-27 11:04:42', '2024-04-27 11:04:42'),
(7, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714219472/images/bk3mazj3ngtot1ygx5i9.jpg', 3, '2024-04-27 11:04:42', '2024-04-27 11:04:42'),
(8, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714219628/images/sxrjrsr8aczmhgiwk2go.jpg', 4, '2024-04-27 11:07:15', '2024-04-27 11:07:15'),
(9, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714219628/images/tmsdsugrkaxtegctt4cy.jpg', 4, '2024-04-27 11:07:15', '2024-04-27 11:07:15'),
(10, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714219628/images/lckjkksofp3ll6cm9n9m.jpg', 4, '2024-04-27 11:07:15', '2024-04-27 11:07:15'),
(11, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714219807/images/r0g3aogfkyc77wj6eocl.jpg', 5, '2024-04-27 11:10:15', '2024-04-27 11:10:15'),
(12, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714219807/images/xenxv7yxxxznxmkeridn.jpg', 5, '2024-04-27 11:10:15', '2024-04-27 11:10:15'),
(13, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714219807/images/v8alr0tifgwkbogoxoi1.jpg', 5, '2024-04-27 11:10:16', '2024-04-27 11:10:16'),
(14, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714219911/images/awioamorcdxjm82jyzf1.jpg', 6, '2024-04-27 11:11:56', '2024-04-27 11:11:56'),
(15, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714219911/images/apern6iznyzruogzvm8j.jpg', 6, '2024-04-27 11:11:56', '2024-04-27 11:11:56'),
(16, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714219911/images/ynkbjmmhf6nx6tpki8nd.jpg', 6, '2024-04-27 11:11:56', '2024-04-27 11:11:56'),
(17, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714219911/images/i8on1pab1cz2rfduwhqp.jpg', 6, '2024-04-27 11:11:56', '2024-04-27 11:11:56'),
(18, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714219987/images/bxe0jjkxbthpmyegz8fp.jpg', 7, '2024-04-27 11:13:10', '2024-04-27 11:13:10'),
(19, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714219986/images/sneu1tyxotlx4gq555d9.jpg', 7, '2024-04-27 11:13:10', '2024-04-27 11:13:10'),
(20, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305069/images/hl3xkvfkuembfayrkdw1.jpg', 8, '2024-04-28 10:51:19', '2024-04-28 10:51:19'),
(21, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305070/images/y57wiispsr3k18tomtw2.jpg', 8, '2024-04-28 10:51:19', '2024-04-28 10:51:19'),
(22, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305070/images/gbbdrkmkh3kofbfuo7m6.jpg', 8, '2024-04-28 10:51:19', '2024-04-28 10:51:19'),
(23, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305070/images/xlo2rc8znlktymjm1jsa.jpg', 8, '2024-04-28 10:51:19', '2024-04-28 10:51:19'),
(24, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305070/images/vl1p4mxcfhgfuxvzuu6c.jpg', 8, '2024-04-28 10:51:19', '2024-04-28 10:51:19'),
(25, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305181/images/ujlsav6euco5mikllmu1.jpg', 9, '2024-04-28 10:53:09', '2024-04-28 10:53:09'),
(26, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305181/images/hluqtzywunrp8xqz1cff.jpg', 9, '2024-04-28 10:53:09', '2024-04-28 10:53:09'),
(27, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305180/images/bei95syrgi2xewrivvw2.jpg', 9, '2024-04-28 10:53:09', '2024-04-28 10:53:09'),
(28, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305181/images/ewsszhoas4ivkt3xs2ib.jpg', 9, '2024-04-28 10:53:09', '2024-04-28 10:53:09'),
(29, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305181/images/kwowox6ffscqhksiqe8n.jpg', 9, '2024-04-28 10:53:10', '2024-04-28 10:53:10'),
(30, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305182/images/ooxpbjwqpnqai0ryka2q.jpg', 9, '2024-04-28 10:53:10', '2024-04-28 10:53:10'),
(31, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305268/images/sb31ul2tavlnbfy9nzau.jpg', 10, '2024-04-28 10:54:35', '2024-04-28 10:54:35'),
(32, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305268/images/jmacrhvvvv1hu5fwh71t.jpg', 10, '2024-04-28 10:54:35', '2024-04-28 10:54:35'),
(33, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305344/images/lttacyxblk7gynsx2qwj.jpg', 11, '2024-04-28 10:55:51', '2024-04-28 10:55:51'),
(34, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305344/images/mocmkfvceievkclsx9pp.jpg', 11, '2024-04-28 10:55:51', '2024-04-28 10:55:51'),
(35, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305412/images/vhpggsy8m4rezikgp7oc.jpg', 12, '2024-04-28 10:56:57', '2024-04-28 10:56:57'),
(36, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305412/images/ekqxl3vlme65svhjbbu6.jpg', 12, '2024-04-28 10:56:57', '2024-04-28 10:56:57'),
(37, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305412/images/szfyuct8ynquagi1zvuv.jpg', 12, '2024-04-28 10:56:57', '2024-04-28 10:56:57'),
(38, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305471/images/cqtreda4hvazxys0skvz.jpg', 13, '2024-04-28 10:57:57', '2024-04-28 10:57:57'),
(39, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305471/images/ta2n57gs4wd00vfal997.jpg', 13, '2024-04-28 10:57:57', '2024-04-28 10:57:57'),
(40, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714305471/images/gb936v5z7lfxocvpfz9n.jpg', 13, '2024-04-28 10:57:57', '2024-04-28 10:57:57'),
(41, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714312514/images/koftztqvapmma57fgu4e.jpg', 14, '2024-04-28 12:55:18', '2024-04-28 12:55:18'),
(42, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714312514/images/iw7ixub6p1qyukmpjigf.jpg', 14, '2024-04-28 12:55:19', '2024-04-28 12:55:19'),
(43, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714312611/images/mbgnxyfgc6mn6p4chzer.jpg', 15, '2024-04-28 12:56:55', '2024-04-28 12:56:55'),
(44, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714312611/images/pxgixvzfcmtlf0j1wjgs.jpg', 15, '2024-04-28 12:56:55', '2024-04-28 12:56:55'),
(46, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714312807/images/ezgbyicxv2ksppwlksgz.jpg', 16, '2024-04-28 13:00:24', '2024-04-28 13:00:24'),
(47, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714312808/images/kjtwzssfzcz1uhghocrz.jpg', 16, '2024-04-28 13:00:24', '2024-04-28 13:00:24'),
(48, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714312951/images/tw9av2xndary1dzfl1tu.jpg', 17, '2024-04-28 13:02:37', '2024-04-28 13:02:37'),
(49, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714312952/images/q2kz26kewvyw74j8xwtw.jpg', 17, '2024-04-28 13:02:37', '2024-04-28 13:02:37'),
(50, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714313027/images/gbvx73g3pbsjjcb007r3.jpg', 18, '2024-04-28 13:03:51', '2024-04-28 13:03:51'),
(51, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714313027/images/hzdyavzk8d53sw1mgl6z.jpg', 18, '2024-04-28 13:03:51', '2024-04-28 13:03:51'),
(52, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714313158/images/cj1eayyimlfzazlfv42u.jpg', 19, '2024-04-28 13:06:03', '2024-04-28 13:06:03'),
(53, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714313159/images/zcnbcbnk4uumkihntviz.jpg', 19, '2024-04-28 13:06:03', '2024-04-28 13:06:03'),
(54, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714385513/images/wrnyjisbez7to9pek6rw.jpg', 20, '2024-04-29 09:11:58', '2024-04-29 09:11:58'),
(55, 'https://res.cloudinary.com/dz5lj5hke/image/upload/w_400/v1714385513/images/oc6gkb904vjaprvj54xt.jpg', 20, '2024-04-29 09:11:58', '2024-04-29 09:11:58');

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nom` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `etat_produit` varchar(255) NOT NULL,
  `prix_unitaire` decimal(8,2) NOT NULL,
  `date_expiration` date NOT NULL,
  `valide_produit` int(11) NOT NULL DEFAULT 0,
  `etat_vente` int(11) NOT NULL DEFAULT 0,
  `scategorieID` bigint(20) UNSIGNED NOT NULL,
  `utilisateurID` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id`, `nom`, `description`, `etat_produit`, `prix_unitaire`, `date_expiration`, `valide_produit`, `etat_vente`, `scategorieID`, `utilisateurID`, `created_at`, `updated_at`) VALUES
(2, 'PC PORTABLE DELL VOSTRO', 'Écran 15.6\" Full HD,  120Hz - Processeur: Intel Core i3-1215U (Up to 4.40 GHz Turbo max, 10 Mo de mémoire cache, Hexa-Core)', 'neuf', 1500.00, '2024-05-10', 1, 0, 3, 6, '2024-04-27 10:36:06', '2024-04-27 11:17:43'),
(3, 'PC PORTABLE ASUS X515', 'Écran 15.6\" Full HD - Processeur: Intel Celeron N4500 (1.10 GHz up to 2.80 GHz , 4Mo de mémoire cache, Dual-Core)', 'moyen', 1200.00, '2024-05-08', 1, 1, 3, 2, '2024-04-27 11:04:41', '2024-04-27 11:17:32'),
(4, 'SMARTPHONE NOKIA', 'Écran 6.3\" LCD IPS (720x1600 Pixels) - Processeur: Unisoc SC9863A1 (28nm) Octa', 'defectueux', 500.00, '2024-05-03', 1, 0, 4, 6, '2024-04-27 11:07:14', '2024-04-27 11:17:21'),
(5, 'SMARTPHONE OPPO A18', 'Écran 6.56\" HD+ (720 x 1612Pixels), 90Hz  - Processeur: Mediatek MT6769 Hélio G85 (12nm) Octa-core (Cortex-A75 2x2,0 GHz et Cortex-A55 6x1,8 GHz), Mali G52 MC2', 'moyen', 600.00, '2024-05-04', 1, 1, 4, 1, '2024-04-27 11:10:15', '2024-04-27 11:17:12'),
(6, 'ECOUTEURS BLUETOOTH', 'Ecouteurs JBL T205BT CRM - Connectivité Sans Fil: Bluetooth 4.1 - Réponse en Fréquence: 20 Hz', 'moyen', 20.00, '2024-05-02', 1, 0, 5, 2, '2024-04-27 11:11:55', '2024-04-27 11:17:00'),
(7, 'CLÉ USB ADATA', 'Clé USB  ADATA C008 - Capacité de Stockage: 16 Go - Interface: USB 2.0 - Vitesse maximale de lecture: 16Mo/ s', 'moyen', 15.00, '2024-05-05', 1, 0, 5, 3, '2024-04-27 11:13:10', '2024-04-27 11:16:44'),
(8, 'Villa jumelée en vente', 'Ce bien est situé sur l\'avenue Ali Belhaouane.Il comprend deux locaux commerciaux de 250m² et un duplex de 175m².', 'moyen', 380000.00, '2024-05-09', 1, 0, 8, 4, '2024-04-28 10:51:18', '2024-04-28 11:01:36'),
(9, 'Villa individuelle en vente', 'Une villa S+3 située à route de Lafrane km 4.5 dans un quartier calme et résidentiel érigé sur un terrain de 622m².', 'neuf', 450000.00, '2024-05-12', 1, 0, 8, 4, '2024-04-28 10:53:08', '2024-04-28 11:01:29'),
(10, 'Terrain agricole', 'offre spécial à maghraoua manzel jmil bizerte. Superficie:3 hectares.', 'neuf', 420000.00, '2024-05-12', 1, 0, 6, 1, '2024-04-28 10:54:34', '2024-04-28 11:01:22'),
(11, 'Terrain a vendre en face rond point Hammamet sud', 'A Vendre un terrain a coté rond point yasmin Hammamet cité privé des villas. Superficie apartir 500 m².', 'moyen', 225000.00, '2024-05-25', 1, 0, 6, 1, '2024-04-28 10:55:50', '2024-04-28 11:01:14'),
(12, 'Bureaux en vente', 'Bureaux en vente à Sfax Ville. Superficie 131 m²', 'neuf', 312300.00, '2024-05-18', 1, 0, 7, 6, '2024-04-28 10:56:56', '2024-04-28 11:01:04'),
(13, 'A Vendre un Bureau H4 à Mohamed v Khair Eddin pacha Tunis', 'Moetaz Immobilière ,vous propose à la vente un bureau d\'une superficie de 140m² environ à Avenue Mohamed V Tunis ( Khair-Eddine pacha )en 1er étage.', 'neuf', 500000.00, '2024-05-30', 1, 0, 7, 6, '2024-04-28 10:57:56', '2024-04-28 11:00:34'),
(14, 'BMW S1000RR', 'La BMW S1000RR allie une puissance impressionnante, un châssis agile et un design racé pour une expérience de conduite ultime.', 'neuf', 30000.00, '2024-05-29', 1, 0, 1, 2, '2024-04-28 12:55:18', '2024-04-28 13:07:08'),
(15, 'Honda CBR1000', 'La Honda CBR1000 offre une puissance brute grâce à son moteur 4 cylindres en ligne, combinée à une maniabilité précise grâce à son châssis léger.', 'neuf', 25000.00, '2024-05-24', 1, 0, 1, 3, '2024-04-28 12:56:55', '2024-04-28 13:07:01'),
(16, 'Harley-Davidson', 'La moto Harley-Davidson incarne l\'esprit de liberté avec son style iconique, son moteur V-Twin emblématique et son grondement distinctif.', 'moyen', 20000.00, '2024-06-08', 1, 0, 1, 3, '2024-04-28 13:00:23', '2024-04-28 13:06:53'),
(17, 'Mercedes GLC', 'Le Mercedes GLC marie luxe et performance avec son design raffiné, son intérieur spacieux et ses technologies avancées.', 'neuf', 180000.00, '2024-05-31', 1, 0, 2, 1, '2024-04-28 13:02:36', '2024-04-28 13:06:45'),
(18, 'Mercedes Classe E', 'La Mercedes Classe E incarne l\'élégance et le raffinement, avec son design sophistiqué, son habitacle luxueux et ses technologies de pointe.', 'neuf', 150000.00, '2024-05-30', 1, 0, 2, 4, '2024-04-28 13:03:51', '2024-04-28 13:06:36'),
(19, 'BMW Série 1', 'La BMW Série 1 est une voiture compacte premium de BMW, offrant un mélange de performances sportives, de luxe et de technologies avancées.', 'neuf', 120000.00, '2024-05-23', 1, 0, 2, 2, '2024-04-28 13:06:03', '2024-04-28 13:06:23'),
(20, 'voiture', 'voiture bleu BMW', 'moyen', 150000.00, '2024-05-10', 0, 0, 2, 6, '2024-04-29 09:11:58', '2024-04-29 09:11:58');

-- --------------------------------------------------------

--
-- Structure de la table `sous_categories`
--

CREATE TABLE `sous_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nomscategorie` varchar(255) NOT NULL,
  `ArchiveSouscategorie` int(11) NOT NULL DEFAULT 0,
  `categorieID` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `sous_categories`
--

INSERT INTO `sous_categories` (`id`, `nomscategorie`, `ArchiveSouscategorie`, `categorieID`, `created_at`, `updated_at`) VALUES
(1, 'Moto', 0, 1, '2024-04-27 09:40:02', '2024-04-27 09:40:02'),
(2, 'Voiture', 0, 1, '2024-04-27 09:40:15', '2024-04-27 09:40:15'),
(3, 'Ordinateur', 0, 2, '2024-04-27 09:40:37', '2024-04-27 09:40:37'),
(4, 'Tablette & Téléphone', 0, 2, '2024-04-27 09:41:18', '2024-04-27 09:41:18'),
(5, 'Autre', 0, 2, '2024-04-27 09:41:32', '2024-04-27 09:41:32'),
(6, 'Terrain', 0, 3, '2024-04-27 09:41:52', '2024-04-27 09:41:52'),
(7, 'Dépôt & Bureau', 0, 3, '2024-04-27 09:42:20', '2024-04-27 09:42:20'),
(8, 'Maison', 0, 3, '2024-04-27 09:42:41', '2024-04-27 09:42:41');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `type_user` varchar(255) NOT NULL,
  `valid_user` int(11) NOT NULL DEFAULT 1,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `email_verified_at`, `password`, `type_user`, `valid_user`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin@gmail.com', NULL, '$2y$12$3RXjv0t2AzT.DGJzDHrh1.mxY0ApfN7AEq7qesPOH/hOrQmMvhBO.', 'admin', 1, NULL, '2024-04-27 09:35:04', '2024-04-27 09:35:04'),
(2, 'heni@gmail.com', NULL, '$2y$12$Mjq9Yhm2iYqyPNGKgZI.OubQ4c.oimLLo/e8GKtDza/dpjg6/icbW', 'acheteur', 1, NULL, '2024-04-27 09:45:36', '2024-04-27 09:45:36'),
(3, 'badi@gmail.com', NULL, '$2y$12$Ucx5CdSsAowukVn93k3do.afKB.52X04ugl8Jfkk4DtX98AD9UWM6', 'acheteur', 1, NULL, '2024-04-27 09:45:53', '2024-04-27 09:45:53'),
(4, 'ahmed@gmail.com', NULL, '$2y$12$dOw4StIZ2w3KOuYwmFVu3.y0gwifNuQUUSw6l26rC9TIXN9/GjyfG', 'acheteur', 1, NULL, '2024-04-27 09:46:07', '2024-04-27 09:46:07'),
(5, 'yassine@gmail.com', NULL, '$2y$12$THX9EwWzFAdMjsyXgpBmye9uFUiSvkgHoiDvZbgc2m4Yfb3bypFdG', 'acheteur', 1, NULL, '2024-04-27 09:46:23', '2024-04-27 09:46:23'),
(7, 'alihammami2000@gmail.com', NULL, '$2y$12$Z2QPK6F9E5.5Fhn3Zal6zO4ICkpS6N7vl8T0ckSX8J38f9BP6dZZy', 'acheteur', 1, NULL, '2024-04-27 10:19:29', '2024-04-27 10:19:29');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `prenom_user` varchar(255) NOT NULL,
  `nom_user` varchar(255) NOT NULL,
  `image_user` varchar(255) NOT NULL,
  `ville_user` varchar(255) NOT NULL,
  `adresse_user` varchar(255) NOT NULL,
  `telephone_user` int(11) NOT NULL,
  `userID` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `prenom_user`, `nom_user`, `image_user`, `ville_user`, `adresse_user`, `telephone_user`, `userID`, `created_at`, `updated_at`) VALUES
(1, 'Heni', 'Dammak', 'https://res.cloudinary.com/dz5lj5hke/image/upload/v1714214660/heni_g5aop2.jpg', 'sousse', 'boujaafer sousse', 99872234, 2, '2024-04-27 09:51:04', '2024-04-27 09:51:04'),
(2, 'Mohamed', 'Ben Bey', 'https://res.cloudinary.com/dz5lj5hke/image/upload/v1714214651/badi_xmk02u.jpg', 'nabeul', 'korba nabeul', 55678876, 3, '2024-04-27 09:52:28', '2024-04-27 09:52:28'),
(3, 'Ahmed', 'Sallemi', 'https://res.cloudinary.com/dz5lj5hke/image/upload/v1714214660/ahmed_wxjwoq.jpg', 'tunis', 'el nasser 2', 24123321, 4, '2024-04-27 09:53:24', '2024-04-27 09:53:24'),
(4, 'Yassine', 'Ayadi', 'https://res.cloudinary.com/dz5lj5hke/image/upload/v1714214650/yassine_vu0r8y.jpg', 'sfax', 'route gremda', 26123123, 5, '2024-04-27 09:57:48', '2024-04-27 09:57:48'),
(6, 'ali', 'hammami', 'https://lh3.googleusercontent.com/a/ACg8ocLY64bBvbVuRsS7AqZVa_lP_rMWVf_2lshyPSihdi6yy__1NULw=s96-c', 'Tunisie', 'sfax', 21820477, 7, '2024-04-27 10:19:29', '2024-04-27 10:19:29');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_nomcategorie_unique` (`nomcategorie`);

--
-- Index pour la table `encheres`
--
ALTER TABLE `encheres`
  ADD PRIMARY KEY (`id`),
  ADD KEY `encheres_produitid_foreign` (`produitID`),
  ADD KEY `encheres_utilisateurid_foreign` (`utilisateurID`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `photos_produitid_foreign` (`produitID`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `produits_scategorieid_foreign` (`scategorieID`),
  ADD KEY `produits_utilisateurid_foreign` (`utilisateurID`);

--
-- Index pour la table `sous_categories`
--
ALTER TABLE `sous_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sous_categories_categorieid_foreign` (`categorieID`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `utilisateurs_userid_foreign` (`userID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `encheres`
--
ALTER TABLE `encheres`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `sous_categories`
--
ALTER TABLE `sous_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `encheres`
--
ALTER TABLE `encheres`
  ADD CONSTRAINT `encheres_produitid_foreign` FOREIGN KEY (`produitID`) REFERENCES `produits` (`id`),
  ADD CONSTRAINT `encheres_utilisateurid_foreign` FOREIGN KEY (`utilisateurID`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `photos`
--
ALTER TABLE `photos`
  ADD CONSTRAINT `photos_produitid_foreign` FOREIGN KEY (`produitID`) REFERENCES `produits` (`id`);

--
-- Contraintes pour la table `produits`
--
ALTER TABLE `produits`
  ADD CONSTRAINT `produits_scategorieid_foreign` FOREIGN KEY (`scategorieID`) REFERENCES `sous_categories` (`id`),
  ADD CONSTRAINT `produits_utilisateurid_foreign` FOREIGN KEY (`utilisateurID`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `sous_categories`
--
ALTER TABLE `sous_categories`
  ADD CONSTRAINT `sous_categories_categorieid_foreign` FOREIGN KEY (`categorieID`) REFERENCES `categories` (`id`);

--
-- Contraintes pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD CONSTRAINT `utilisateurs_userid_foreign` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
