<div align="center">

<img src="https://raw.githubusercontent.com/nixrajput/github-readme-stats/master/assets/logo.svg" width="76" alt="github-readme-stats">

# github-readme-stats

<em>GitHub stats, top languages and pinned-repo cards, rendered as SVG.</em>

<br />

[![Stars](https://img.shields.io/github/stars/nixrajput/github-readme-stats?color=159F7C)][repo]
[![License: MIT](https://img.shields.io/github/license/nixrajput/github-readme-stats?color=159F7C)][license]
[![Last commit](https://img.shields.io/github/last-commit/nixrajput/github-readme-stats?label=last%20commit)][repo]
[![Issues](https://img.shields.io/github/issues/nixrajput/github-readme-stats?label=issues)][issues]
[![PRs](https://img.shields.io/github/issues-pr/nixrajput/github-readme-stats?label=PRs)][pulls]

<strong>Self-hosted &middot; own PAT &middot; stats, top-langs, pins, gists, WakaTime &middot; Node on Vercel</strong><br>
<sub>The upstream public instance is paused (<code>DEPLOYMENT_PAUSED</code>), so this runs on our own deployment and token. The service reports its own health at <code>/api/status/up</code> and <code>/api/status/pat-info</code> - worth checking first, because an <strong>expired PAT renders as a rate-limit message</strong> and misreports the cause.</sub>

</div>

---

## Contents

- [github-readme-stats](#github-readme-stats)
  - [Contents](#contents)
  - [Usage](#usage)
  - [🩺 Health check](#-health-check)
  - [Quick Tip (Align The Cards)](#quick-tip-align-the-cards)
  - [🚀 Deployment](#-deployment)
  - [🛠 Local development](#-local-development)
  - [Contributing](#contributing)
  - [Contributors](#contributors)
  - [License](#license)
  - [Support the project](#support-the-project)
  - [Connect](#connect)

Self-hosted service behind the stats and top-languages cards on
[nixrajput's profile README](https://github.com/nixrajput). The upstream public instance is
paused, so this runs on our own Vercel deployment and our own Personal Access Token.

**Endpoint:** `https://github-readme-stats.nixrajput.com`

## Usage

```md
[![Stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput&show_icons=true)](https://github.com/nixrajput)
```

Theme-aware embedding, which is what the profile README uses. The `#gh-dark-mode-only`
fragment is deprecated and no longer switches images, so use `<picture>`:

```html
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats.nixrajput.com/api?username=nixrajput&show_icons=true&hide_border=true&theme=dark" />
  <img src="https://github-readme-stats.nixrajput.com/api?username=nixrajput&show_icons=true&hide_border=true&theme=default" alt="Stats" />
</picture>
```

## 🩺 Health check

The service exposes its own status, which is the fastest way to tell a broken token from a
broken deploy:

```bash
curl -s https://github-readme-stats.nixrajput.com/api/status/up        # -> true when the PAT is usable
curl -s https://github-readme-stats.nixrajput.com/api/status/pat-info  # -> per-token: valid / expired / exhausted / suspended
```

> [!IMPORTANT]
> An expired PAT renders as a "Something went wrong! Downtime due to GitHub API rate limiting"
> card, which misreports the cause. Check `pat-info` before assuming a rate limit.

# GitHub Stats Card

Copy and paste this into your markdown, and that's it. Simple!

Change the `?username=` value to your GitHub username.

```md
[![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput)](https://github.com/nixrajput/github-readme-stats)
```

<table><tr><td>
⚠️<b>Warning</b>

By default, the stats card only shows statistics like stars, commits, and pull requests from public repositories. To show private statistics on the stats card, you should [deploy your own instance](#deploy-on-your-own) using your own GitHub API token.
</td></tr></table>

<table><tr><td>
ℹ️<b>Note</b>

Available ranks are S (top 1%), A+ (12.5%), A (25%), A- (37.5%), B+ (50%), B (62.5%), B- (75%), C+ (87.5%) and C (everyone). This ranking scheme is based on the [Japanese academic grading](https://wikipedia.org/wiki/Academic_grading_in_Japan) system. The global percentile is calculated as a weighted sum of percentiles for each statistic (number of commits, pull requests, reviews, issues, stars, and followers), based on the cumulative distribution function of the [exponential](https://wikipedia.org/wiki/exponential_distribution) and the [log-normal](https://wikipedia.org/wiki/Log-normal_distribution) distributions. The implementation can be investigated at [src/calculateRank.js](https://github.com/nixrajput/github-readme-stats/blob/master/src/calculateRank.js). The circle around the rank shows 100 minus the global percentile.
</td></tr></table>

### Hiding individual stats

You can pass a query parameter `&hide=` to hide any specific stats with comma-separated values.

> Options: `&hide=stars,commits,prs,issues,contribs`

```md
![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput&hide=contribs,prs)
```

### Showing additional individual stats

You can pass a query parameter `&show=` to show any specific additional stats with comma-separated values.

> Options: `&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage`

```md
![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage)
```

### Showing icons

To enable icons, you can pass `&show_icons=true` in the query param, like so:

```md
![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput&show_icons=true)
```

### Showing commits count for specified year

You can specify a year and fetch only the commits that were made in that year by passing `&commits_year=YYYY` to the parameter.

```md
![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput&commits_year=2020)
```

### Themes

With inbuilt themes, you can customize the look of the card without doing any [manual customization](#customization).

Use `&theme=THEME_NAME` parameter like so :

```md
![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput&show_icons=true&theme=radical)
```

#### All inbuilt themes

GitHub Readme Stats comes with several built-in themes (e.g. `dark`, `radical`, `merko`, `gruvbox`, `tokyonight`, `onedark`, `cobalt`, `synthwave`, `highcontrast`, `dracula`).

<img src="https://res.cloudinary.com/nixrajput/image/upload/v1595174536/grs-themes_l4ynja.png" alt="GitHub Readme Stats Themes" width="600px"/>

You can look at a preview for [all available themes](themes/README.md) or checkout the [theme config file](themes/index.js). Please note that we paused the addition of new themes to decrease maintenance efforts; all pull requests related to new themes will be closed.

#### Responsive Card Theme

[![Anurag's GitHub stats-Dark](https://github-readme-stats.nixrajput.com/api?username=nixrajput\&show_icons=true\&theme=dark#gh-dark-mode-only)](https://github.com/nixrajput/github-readme-stats#responsive-card-theme#gh-dark-mode-only)
[![Anurag's GitHub stats-Light](https://github-readme-stats.nixrajput.com/api?username=nixrajput\&show_icons=true\&theme=default#gh-light-mode-only)](https://github.com/nixrajput/github-readme-stats#responsive-card-theme#gh-light-mode-only)

Since GitHub will re-upload the cards and serve them from their [CDN](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-anonymized-urls), we can not infer the browser/GitHub theme on the server side. There are, however, four methods you can use to create dynamics themes on the client side.

##### Use the transparent theme

We have included a `transparent` theme that has a transparent background. This theme is optimized to look good on GitHub's dark and light default themes. You can enable this theme using the `&theme=transparent` parameter like so:

```md
![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput&show_icons=true&theme=transparent)
```

<details>
<summary>:eyes: Show example</summary>

![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput\&show_icons=true\&theme=transparent)

</details>

##### Add transparent alpha channel to a themes bg\_color

You can use the `bg_color` parameter to make any of [the available themes](themes/README.md) transparent. This is done by setting the `bg_color` to a color with a transparent alpha channel (i.e. `bg_color=00000000`):

```md
![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput&show_icons=true&bg_color=00000000)
```

<details>
<summary>:eyes: Show example</summary>

![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput\&show_icons=true\&bg_color=00000000)

</details>

##### Use GitHub's theme context tag

You can use [GitHub's theme context](https://github.blog/changelog/2021-11-24-specify-theme-context-for-images-in-markdown/) tags to switch the theme based on the user GitHub theme automatically. This is done by appending `#gh-dark-mode-only` or `#gh-light-mode-only` to the end of an image URL. This tag will define whether the image specified in the markdown is only shown to viewers using a light or a dark GitHub theme:

```md
[![Anurag's GitHub stats-Dark](https://github-readme-stats.nixrajput.com/api?username=nixrajput&show_icons=true&theme=dark#gh-dark-mode-only)](https://github.com/nixrajput/github-readme-stats#gh-dark-mode-only)
[![Anurag's GitHub stats-Light](https://github-readme-stats.nixrajput.com/api?username=nixrajput&show_icons=true&theme=default#gh-light-mode-only)](https://github.com/nixrajput/github-readme-stats#gh-light-mode-only)
```

<details>
<summary>:eyes: Show example</summary>

[![Anurag's GitHub stats-Dark](https://github-readme-stats.nixrajput.com/api?username=nixrajput\&show_icons=true\&theme=dark#gh-dark-mode-only)](https://github.com/nixrajput/github-readme-stats#gh-dark-mode-only)
[![Anurag's GitHub stats-Light](https://github-readme-stats.nixrajput.com/api?username=nixrajput\&show_icons=true\&theme=default#gh-light-mode-only)](https://github.com/nixrajput/github-readme-stats#gh-light-mode-only)

</details>

##### Use GitHub's new media feature

You can use [GitHub's new media feature](https://github.blog/changelog/2022-05-19-specify-theme-context-for-images-in-markdown-beta/) in HTML to specify whether to display images for light or dark themes. This is done using the HTML `<picture>` element in combination with the `prefers-color-scheme` media feature.

```html
<picture>
  <source
    srcset="https://github-readme-stats.nixrajput.com/api?username=nixrajput&show_icons=true&theme=dark"
    media="(prefers-color-scheme: dark)"
  />
  <source
    srcset="https://github-readme-stats.nixrajput.com/api?username=nixrajput&show_icons=true"
    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
  />
  <img src="https://github-readme-stats.nixrajput.com/api?username=nixrajput&show_icons=true" />
</picture>
```

<details>
<summary>:eyes: Show example</summary>

<picture>
  <source
    srcset="https://github-readme-stats.nixrajput.com/api?username=nixrajput&show_icons=true&theme=dark"
    media="(prefers-color-scheme: dark)"
  />
  <source
    srcset="https://github-readme-stats.nixrajput.com/api?username=nixrajput&show_icons=true"
    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
  />
  <img src="https://github-readme-stats.nixrajput.com/api?username=nixrajput&show_icons=true" />
</picture>

</details>

### Customization

You can customize the appearance of all your cards however you wish with URL parameters.

#### Common Options

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `title_color` | Card's title color. | string (hex color) | `2f80ed` |
| `text_color` | Body text color. | string (hex color) | `434d58` |
| `icon_color` | Icons color if available. | string (hex color) | `4c71f2` |
| `border_color` | Card's border color. Does not apply when `hide_border` is enabled. | string (hex color) | `e4e2e2` |
| `bg_color` | Card's background color. | string (hex color or a gradient in the form of *angle,start,end*) | `fffefe` |
| `hide_border` | Hides the card's border. | boolean | `false` |
| `theme` | Name of the theme, choose from [all available themes](themes/README.md). | enum | `default` |
| `cache_seconds` | Sets the cache header manually (min: 21600, max: 86400). | integer | `21600` |
| `locale` | Sets the language in the card, you can check full list of available locales [here](#available-locales). | enum | `en` |
| `border_radius` | Corner rounding on the card. | number | `4.5` |

<table><tr><td>
⚠️<b>Warning</b>

We use caching to decrease the load on our servers (see <https://github.com/nixrajput/github-readme-stats/issues/1471#issuecomment-1271551425>). Our cards have the following default cache hours: stats card - 24 hours, top languages card - 144 hours (6 days), pin card - 240 hours (10 days), gist card - 48 hours (2 days), and wakatime card - 24 hours. If you want the data on your cards to be updated more often you can [deploy your own instance](#deploy-on-your-own) and set [environment variable](#available-environment-variables) `CACHE_SECONDS` to a value of your choosing.
</td></tr></table>

##### Gradient in bg\_color

You can provide multiple comma-separated values in the bg\_color option to render a gradient with the following format:

    &bg_color=DEG,COLOR1,COLOR2,COLOR3...COLOR10

##### Available locales

Here is a list of all available locales:

<table>
<tr><td>

| Code | Locale |
| --- | --- |
| `ar` | Arabic |
| `az` | Azerbaijani |
| `bn` | Bengali |
| `bg` | Bulgarian |
| `my` | Burmese |
| `ca` | Catalan |
| `cn` | Chinese |
| `zh-tw` | Chinese (Taiwan) |
| `cs` | Czech |
| `nl` | Dutch |
| `en` | English |
| `fil` | Filipino |
| `fi` | Finnish |
| `fr` | French |
| `de` | German |
| `el` | Greek |

</td><td>

| Code | Locale |
| --- | --- |
| `he` | Hebrew |
| `hi` | Hindi |
| `hu` | Hungarian |
| `id` | Indonesian |
| `it` | Italian |
| `ja` | Japanese |
| `kr` | Korean |
| `ml` | Malayalam |
| `np` | Nepali |
| `no` | Norwegian |
| `fa` | Persian (Farsi) |
| `pl` | Polish |
| `pt-br` | Portuguese (Brazil) |
| `pt-pt` | Portuguese (Portugal) |
| `ro` | Romanian |

</td><td>

| Code | Locale |
| --- | --- |
| `ru` | Russian |
| `sa` | Sanskrit |
| `sr` | Serbian (Cyrillic) |
| `sr-latn` | Serbian (Latin) |
| `sk` | Slovak |
| `es` | Spanish |
| `sw` | Swahili |
| `se` | Swedish |
| `ta` | Tamil |
| `th` | Thai |
| `tr` | Turkish |
| `uk-ua` | Ukrainian |
| `ur` | Urdu |
| `uz` | Uzbek |
| `vi` | Vietnamese |

</td></tr>
</table>

If we don't support your language, please consider contributing! You can find more information about how to do it in our [contributing guidelines](CONTRIBUTING.md#translations-contribution).

#### Stats Card Exclusive Options

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `hide` | Hides the [specified items](#hiding-individual-stats) from stats. | string (comma-separated values) | `null` |
| `hide_title` | Hides the title of your stats card. | boolean | `false` |
| `card_width` | Sets the card's width manually. | number | `500px  (approx.)` |
| `hide_rank` | Hides the rank and automatically resizes the card width. | boolean | `false` |
| `rank_icon` | Shows alternative rank icon (i.e. `github`, `percentile` or `default`). | enum | `default` |
| `show_icons` | Shows icons near all stats. | boolean | `false` |
| `include_all_commits` | Count total commits instead of just the current year commits. | boolean | `false` |
| `line_height` | Sets the line height between text. | integer | `25` |
| `exclude_repo` | Excludes specified repositories. | string (comma-separated values) | `null` |
| `custom_title` | Sets a custom title for the card. | string | `<username> GitHub Stats` |
| `text_bold` | Uses bold text. | boolean | `true` |
| `disable_animations` | Disables all animations in the card. | boolean | `false` |
| `ring_color` | Color of the rank circle. | string (hex color) | `2f80ed` |
| `number_format` | Switches between two available formats for displaying the card values `short` (i.e. `6.6k`) and `long` (i.e. `6626`). | enum | `short` |
| `number_precision` | Enforce the number of digits after the decimal point for `short` number format. Must be an integer between 0 and 2. Will be ignored for `long` number format. | integer (0, 1 or 2) | `null` |
| `show` | Shows [additional items](#showing-additional-individual-stats) on stats card (i.e. `reviews`, `discussions_started`, `discussions_answered`, `prs_merged` or `prs_merged_percentage`). | string (comma-separated values) | `null` |
| `commits_year` | Filters and counts only commits made in the specified year. | integer _(YYYY)_ | `<current year> (one year to date)` |

<table><tr><td>
⚠️<b>Warning</b>

Custom title should be URI-escaped, as specified in [Percent Encoding](https://en.wikipedia.org/wiki/Percent-encoding) (i.e: `Anurag's GitHub Stats` should become `Anurag%27s%20GitHub%20Stats`). You can use [urlencoder.org](https://www.urlencoder.org/) to help you do this automatically.
</td></tr></table>

<table><tr><td>
ℹ️<b>Note</b>

When hide\_rank=`true`, the minimum card width is 270 px + the title length and padding.
</td></tr></table>

***

# GitHub Extra Pins

GitHub extra pins allow you to pin more than 6 repositories in your profile using a GitHub readme profile.

Yay! You are no longer limited to 6 pinned repositories.

### Usage

Copy-paste this code into your readme and change the links.

Endpoint: `api/pin?username=nixrajput&repo=github-readme-stats`

```md
[![Readme Card](https://github-readme-stats.nixrajput.com/api/pin/?username=nixrajput&repo=github-readme-stats)](https://github.com/nixrajput/github-readme-stats)
```

### Options

You can customize the appearance and behavior of the pinned repository card using the [common options](#common-options) and exclusive options listed in the table below.

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `show_owner` | Shows the repo's owner name. | boolean | `false` |
| `description_lines_count` | Manually set the number of lines for the description. Specified value will be clamped between 1 and 3. If this parameter is not specified, the number of lines will be automatically adjusted according to the actual length of the description. | number | `null` |

### Demo

![Readme Card](https://github-readme-stats.nixrajput.com/api/pin/?username=nixrajput\&repo=github-readme-stats)

Use `show_owner` query option to include the repo's owner username

![Readme Card](https://github-readme-stats.nixrajput.com/api/pin/?username=nixrajput\&repo=github-readme-stats\&show_owner=true)

# GitHub Gist Pins

GitHub gist pins allow you to pin gists in your GitHub profile using a GitHub readme profile.

### Usage

Copy-paste this code into your readme and change the links.

Endpoint: `api/gist?id=bbfce31e0217a3689c8d961a356cb10d`

```md
[![Gist Card](https://github-readme-stats.nixrajput.com/api/gist?id=bbfce31e0217a3689c8d961a356cb10d)](https://gist.github.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/)
```

### Options

You can customize the appearance and behavior of the gist card using the [common options](#common-options) and exclusive options listed in the table below.

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `show_owner` | Shows the gist's owner name. | boolean | `false` |

### Demo

![Gist Card](https://github-readme-stats.nixrajput.com/api/gist?id=bbfce31e0217a3689c8d961a356cb10d)

Use `show_owner` query option to include the gist's owner username

![Gist Card](https://github-readme-stats.nixrajput.com/api/gist?id=bbfce31e0217a3689c8d961a356cb10d\&show_owner=true)

# Top Languages Card

The top languages card shows a GitHub user's most frequently used languages.

<table><tr><td>
⚠️<b>Warning</b>

By default, the language card shows language results only from public repositories. To include languages used in private repositories, you should [deploy your own instance](#deploy-on-your-own) using your own GitHub API token.
</td></tr></table>

<table><tr><td>
ℹ️<b>Note</b>

Top Languages does not indicate the user's skill level or anything like that; it's a GitHub metric to determine which languages have the most code on GitHub. It is a new feature of github-readme-stats.
</td></tr></table>

<table><tr><td>
⚠️<b>Warning</b>

This card shows language usage only inside your own non-forked repositories, not depending on who the author of the commits is. It does not include your contributions into another users/organizations repositories. Currently there are no way to get this data from GitHub API. If you want this behavior to be improved you can support [this feature request](https://github.com/orgs/community/discussions/18230) created by [@rickstaa](https://github.com/rickstaa) inside GitHub Community.
</td></tr></table>

<table><tr><td>
⚠️<b>Warning</b>

Currently this card shows data only about first 100 repositories. This is because GitHub API limitations which cause downtimes of public instances (see [#1471](https://github.com/nixrajput/github-readme-stats/issues/1471)). In future this behavior will be improved by releasing GitHub action or providing environment variables for user's own instances.
</td></tr></table>

### Usage

Copy-paste this code into your readme and change the links.

Endpoint: `api/top-langs?username=nixrajput`

```md
[![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput)](https://github.com/nixrajput/github-readme-stats)
```

### Options

You can customize the appearance and behavior of the top languages card using the [common options](#common-options) and exclusive options listed in the table below.

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `hide` | Hides the [specified languages](#hide-individual-languages) from card. | string (comma-separated values) | `null` |
| `hide_title` | Hides the title of your card. | boolean | `false` |
| `layout` | Switches between five available layouts `normal` & `compact` & `donut` & `donut-vertical` & `pie`. | enum | `normal` |
| `card_width` | Sets the card's width manually. | number | `300` |
| `langs_count` | Shows more languages on the card, between 1-20. | integer | `5` for `normal` and `donut`, `6` for other layouts |
| `exclude_repo` | Excludes specified repositories. | string (comma-separated values) | `null` |
| `custom_title` | Sets a custom title for the card. | string | `Most Used Languages` |
| `disable_animations` | Disables all animations in the card. | boolean | `false` |
| `hide_progress` | Uses the compact layout option, hides percentages, and removes the bars. | boolean | `false` |
| `size_weight` | Configures language stats algorithm (see [Language stats algorithm](#language-stats-algorithm)). | integer | `1` |
| `count_weight` | Configures language stats algorithm (see [Language stats algorithm](#language-stats-algorithm)). | integer | `0` |
| `stats_format` | Switches between two available formats for language's stats `percentages` and `bytes`. | enum | `percentages` |

<table><tr><td>
⚠️<b>Warning</b>

Language names and custom title should be URI-escaped, as specified in [Percent Encoding](https://en.wikipedia.org/wiki/Percent-encoding) (i.e: `c++` should become `c%2B%2B`, `jupyter notebook` should become `jupyter%20notebook`, `Most Used Languages` should become `Most%20Used%20Languages`, etc.) You can use [urlencoder.org](https://www.urlencoder.org/) to help you do this automatically.
</td></tr></table>

### Language stats algorithm

We use the following algorithm to calculate the languages percentages on the language card:

```js
ranking_index = (byte_count ^ size_weight) * (repo_count ^ count_weight)
```

By default, only the byte count is used for determining the languages percentages shown on the language card (i.e. `size_weight=1` and `count_weight=0`). You can, however, use the `&size_weight=` and `&count_weight=` options to weight the language usage calculation. The values must be positive real numbers. [More details about the algorithm can be found here](https://github.com/nixrajput/github-readme-stats/issues/1600#issuecomment-1046056305).

*   `&size_weight=1&count_weight=0` - *(default)* Orders by byte count.
*   `&size_weight=0.5&count_weight=0.5` - *(recommended)* Uses both byte and repo count for ranking
*   `&size_weight=0&count_weight=1` - Orders by repo count

```md
![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput&size_weight=0.5&count_weight=0.5)
```

### Exclude individual repositories

You can use the `&exclude_repo=repo1,repo2` parameter to exclude individual repositories.

```md
![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput&exclude_repo=github-readme-stats,nixrajput.github.io)
```

### Hide individual languages

You can use `&hide=language1,language2` parameter to hide individual languages.

```md
![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput&hide=javascript,html)
```

### Show more languages

You can use the `&langs_count=` option to increase or decrease the number of languages shown on the card. Valid values are integers between 1 and 20 (inclusive). By default it was set to `5` for `normal` & `donut` and `6` for other layouts.

```md
![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput&langs_count=8)
```

### Compact Language Card Layout

You can use the `&layout=compact` option to change the card design.

```md
![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput&layout=compact)
```

### Donut Chart Language Card Layout

You can use the `&layout=donut` option to change the card design.

```md
[![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput&layout=donut)](https://github.com/nixrajput/github-readme-stats)
```

### Donut Vertical Chart Language Card Layout

You can use the `&layout=donut-vertical` option to change the card design.

```md
[![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput&layout=donut-vertical)](https://github.com/nixrajput/github-readme-stats)
```

### Pie Chart Language Card Layout

You can use the `&layout=pie` option to change the card design.

```md
[![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput&layout=pie)](https://github.com/nixrajput/github-readme-stats)
```

### Hide Progress Bars

You can use the `&hide_progress=true` option to hide the percentages and the progress bars (layout will be automatically set to `compact`).

```md
![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput&hide_progress=true)
```

### Change format of language's stats

You can use the `&stats_format=bytes` option to display the stats in bytes instead of percentage.

```md
![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput&stats_format=bytes)
```

### Demo

![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput)

*   Compact layout

![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput\&layout=compact)

*   Donut Chart layout

[![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput\&layout=donut)](https://github.com/nixrajput/github-readme-stats)

*   Donut Vertical Chart layout

[![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput\&layout=donut-vertical)](https://github.com/nixrajput/github-readme-stats)

*   Pie Chart layout

[![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput\&layout=pie)](https://github.com/nixrajput/github-readme-stats)

*   Hidden progress bars

![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput\&hide_progress=true)

*  Display bytes instead of percentage

![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput\&stats_format=bytes)

# WakaTime Stats Card

<table><tr><td>
⚠️<b>Warning</b>

Please be aware that we currently only show data from WakaTime profiles that are public. You therefore have to make sure that **BOTH** `Display code time publicly` and `Display languages, editors, os, categories publicly` are enabled.
</td></tr></table>

<table><tr><td>
⚠️<b>Warning</b>

In case you just created a new WakaTime account, then it might take up to 24 hours until your stats will become visible on the WakaTime stats card.
</td></tr></table>

Change the `?username=` value to your [WakaTime](https://wakatime.com) username.

```md
[![Harlok's WakaTime stats](https://github-readme-stats.nixrajput.com/api/wakatime?username=ffflabs)](https://github.com/nixrajput/github-readme-stats)
```

### Options

You can customize the appearance and behavior of the WakaTime stats card using the [common options](#common-options) and exclusive options listed in the table below.

| Name | Description | Type | Default value |
| --- | --- | --- | --- |
| `hide` | Hides the languages specified from the card. | string (comma-separated values) | `null` |
| `hide_title` | Hides the title of your card. | boolean | `false` |
| `card_width` | Sets the card's width manually. | number | `495` |
| `line_height` | Sets the line height between text. | integer | `25` |
| `hide_progress` | Hides the progress bar and percentage. | boolean | `false` |
| `custom_title` | Sets a custom title for the card. | string | `WakaTime Stats` |
| `layout` | Switches between two available layouts `default` & `compact`. | enum | `default` |
| `langs_count` | Limits the number of languages on the card, defaults to all reported languages. | integer | `null` |
| `api_domain` | Sets a custom API domain for the card, e.g. to use services like [Hakatime](https://github.com/mujx/hakatime) or [Wakapi](https://github.com/muety/wakapi) | string | `wakatime.com` |
| `display_format` | Sets the WakaTime stats display format. Choose `time` to display time-based stats or `percent` to show percentages. | enum | `time` |
| `disable_animations` | Disables all animations in the card. | boolean | `false` |

<table><tr><td>
⚠️<b>Warning</b>

Custom title should be URI-escaped, as specified in [Percent Encoding](https://en.wikipedia.org/wiki/Percent-encoding) (i.e: `WakaTime Stats` should become `WakaTime%20Stats`). You can use [urlencoder.org](https://www.urlencoder.org/) to help you do this automatically.
</td></tr></table>

### Demo

![Harlok's WakaTime stats](https://github-readme-stats.nixrajput.com/api/wakatime?username=ffflabs)

![Harlok's WakaTime stats](https://github-readme-stats.nixrajput.com/api/wakatime?username=ffflabs\&hide_progress=true)

*   Compact layout

![Harlok's WakaTime stats](https://github-readme-stats.nixrajput.com/api/wakatime?username=ffflabs\&layout=compact)

***

# All Demos

*   Default

![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput)

*   Hiding specific stats

![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput\&hide=contribs,issues)

*   Showing additional stats

![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput\&show_icons=true\&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage)

*   Showing icons

![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput\&hide=issues\&show_icons=true)

*   Shows GitHub logo instead rank level

![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput\&rank_icon=github)

*   Shows user rank percentile instead of rank level

![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput\&rank_icon=percentile)

*   Customize Border Color

![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput\&border_color=2e4058)

*   Include All Commits

![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput\&include_all_commits=true)

*   Themes

Choose from any of the [default themes](#themes)

![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput\&show_icons=true\&theme=radical)

*   Gradient

![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api?username=nixrajput\&bg_color=30,e96443,904e95\&title_color=fff\&text_color=fff)

*   Customizing stats card

![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api/?username=nixrajput\&show_icons=true\&title_color=fff\&icon_color=79ff97\&text_color=9f9f9f\&bg_color=151515)

*   Setting card locale

![Anurag's GitHub stats](https://github-readme-stats.nixrajput.com/api/?username=nixrajput\&locale=es)

*   Customizing repo card

![Customized Card](https://github-readme-stats.nixrajput.com/api/pin?username=nixrajput\&repo=github-readme-stats\&title_color=fff\&icon_color=f9f9f9\&text_color=9f9f9f\&bg_color=151515)

*   Gist card

![Gist Card](https://github-readme-stats.nixrajput.com/api/gist?id=bbfce31e0217a3689c8d961a356cb10d)

*   Customizing gist card

![Gist Card](https://github-readme-stats.nixrajput.com/api/gist?id=bbfce31e0217a3689c8d961a356cb10d&theme=calm)

*   Top languages

![Top Langs](https://github-readme-stats.nixrajput.com/api/top-langs/?username=nixrajput)

*   WakaTime card

![Harlok's WakaTime stats](https://github-readme-stats.nixrajput.com/api/wakatime?username=ffflabs)

***

## Quick Tip (Align The Cards)

By default, GitHub does not lay out the cards side by side. To do that, you can use such approaches:

### Stats and top languages cards

```html
<a href="https://github.com/nixrajput/github-readme-stats">
  <img height=200 align="center" src="https://github-readme-stats.nixrajput.com/api?username=nixrajput" />
</a>
<a href="https://github.com/nixrajput/convoychat">
  <img height=200 align="center" src="https://github-readme-stats.nixrajput.com/api/top-langs?username=nixrajput&layout=compact&langs_count=8&card_width=320" />
</a>
```

<details>
<summary>:eyes: Show example</summary>

<a href="https://github.com/nixrajput/github-readme-stats">
  <img height=200 align="center" src="https://github-readme-stats.nixrajput.com/api?username=nixrajput" />
</a>
<a href="https://github.com/nixrajput/convoychat">
  <img height=200 align="center" src="https://github-readme-stats.nixrajput.com/api/top-langs?username=nixrajput&layout=compact&langs_count=8&card_width=320" />
</a>

</details>

### Pinning repositories

```html
<a href="https://github.com/nixrajput/github-readme-stats">
  <img align="center" src="https://github-readme-stats.nixrajput.com/api/pin/?username=nixrajput&repo=github-readme-stats" />
</a>
<a href="https://github.com/nixrajput/convoychat">
  <img align="center" src="https://github-readme-stats.nixrajput.com/api/pin/?username=nixrajput&repo=convoychat" />
</a>
```

<details>
<summary>:eyes: Show example</summary>

<a href="https://github.com/nixrajput/github-readme-stats">
  <img align="center" src="https://github-readme-stats.nixrajput.com/api/pin/?username=nixrajput&repo=github-readme-stats" />
</a>
<a href="https://github.com/nixrajput/convoychat">
  <img align="center" src="https://github-readme-stats.nixrajput.com/api/pin/?username=nixrajput&repo=convoychat" />
</a>

</details>

## 🚀 Deployment

Deployed to Vercel from this repo's `master` branch. Node serverless functions under `api/`.

### Personal Access Token

Create a classic token at <https://github.com/settings/tokens/new>. **No scopes are required**
for public data. Set a long expiry: token expiry, not rate limiting, is the usual cause of
these cards going dark.

Set it as `PAT_1` in the Vercel project's environment variables, then redeploy and confirm
`/api/status/up` returns `true`.

### Available environment variables

GitHub Readme Stats provides several environment variables that can be used to customize the behavior of your self-hosted instance. These include:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Supported values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>CACHE_SECONDS</code></td>
      <td>Sets the cache duration in seconds for the generated cards. This variable takes precedence over the default cache timings for the public instance. If this variable is not set, the default cache duration is 24 hours (86,400 seconds).</td>
      <td>Any positive integer or <code>0</code> to disable caching</td>
    </tr>
    <tr>
      <td><code>WHITELIST</code></td>
      <td>A comma-separated list of GitHub usernames that are allowed to access your instance. If this variable is not set, all usernames are allowed.</td>
      <td>Comma-separated GitHub usernames</td>
    </tr>
    <tr>
      <td><code>GIST_WHITELIST</code></td>
      <td>A comma-separated list of GitHub Gist IDs that are allowed to be accessed on your instance. If this variable is not set, all Gist IDs are allowed.</td>
      <td>Comma-separated GitHub Gist IDs</td>
    </tr>
    <tr>
      <td><code>EXCLUDE_REPO</code></td>
      <td>A comma-separated list of repositories that will be excluded from stats and top languages cards on your instance. This allows repository exclusion without exposing repository names in public URLs. This enhances privacy for self-hosted instances that include private repositories in stats cards.</td>
      <td>Comma-separated repository names</td>
    </tr>
    <tr>
      <td><code>FETCH_MULTI_PAGE_STARS</code></td>
      <td>Enables fetching all starred repositories for accurate star counts, especially for users with more than 100 repositories. This may increase response times and API points usage, so it is disabled on the public instance.</td>
      <td><code>true</code> or <code>false</code></td>
    </tr>
  </tbody>
</table>

See [the Vercel documentation](https://vercel.com/docs/concepts/projects/environment-variables) on adding these environment variables to your Vercel instance.

<table><tr><td>
⚠️<b>Warning</b>

Please remember to redeploy your instance after making any changes to the environment variables so that the updates take effect. The changes will not be applied to the previous deployments.
</td></tr></table>

## 🛠 Local development

```bash
npm ci
npm run test          # unit tests
npm run lint          # eslint
npx vercel dev        # serve the API locally
```

## Contributing

Contributions are welcome. Fork, branch, and open a PR. Bugs and ideas go to [Issues][issues]; questions to [Discussions][discussions].

## Contributors

Thanks to everyone who has contributed to github-readme-stats.

<a href="https://github.com/nixrajput/github-readme-stats/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=nixrajput/github-readme-stats" alt="Contributors" />
</a>

## License

Licensed under the **MIT** license - see [LICENSE](LICENSE).

Derived from [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats) by Anurag Hazra, used under the MIT License. The original
copyright notice is retained in [LICENSE](LICENSE). This repository is an independent
deployment and is not affiliated with or endorsed by the original author.

## Support the project

<div align="center">

github-readme-stats is MIT licensed and free to use, always. If it earns a place on your profile, sponsorship is welcome.

<br />

<a href="https://github.com/sponsors/nixrajput">
  <img src="https://img.shields.io/badge/Sponsor_on_GitHub-EA4AAA?style=for-the-badge&logo=githubsponsors&logoColor=white" alt="GitHub Sponsors" />
</a>
<a href="https://ko-fi.com/nixrajput">
  <img src="https://img.shields.io/badge/Ko--fi-FF5E5B?style=for-the-badge&logo=kofi&logoColor=white" alt="Ko-fi" />
</a>
<a href="https://www.buymeacoffee.com/nixrajput">
  <img src="https://img.shields.io/badge/Buy_Me_a_Coffee-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black" alt="Buy Me a Coffee" />
</a>

</div>

## Connect

<div align="center">

**Nikhil Rajput**

<a href="https://github.com/nixrajput"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
<a href="https://linkedin.com/in/nixrajput"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
<a href="https://x.com/nixrajput"><img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X" /></a>
<a href="https://instagram.com/nixrajput"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" /></a>
<a href="https://telegram.me/nixrajput"><img src="https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram" /></a>
<a href="mailto:nkr.nikhil.nkr@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>

</div>

[repo]: https://github.com/nixrajput/github-readme-stats
[issues]: https://github.com/nixrajput/github-readme-stats/issues
[pulls]: https://github.com/nixrajput/github-readme-stats/pulls
[discussions]: https://github.com/nixrajput/github-readme-stats/discussions
[contributors]: https://github.com/nixrajput/github-readme-stats/graphs/contributors
[license]: https://github.com/nixrajput/github-readme-stats/blob/master/LICENSE
