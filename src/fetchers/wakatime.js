// @ts-check

import axios from "axios";
import { CustomError, MissingParamError } from "../common/error.js";

// api_domain sets the host of a server-side request, so only these hosts are accepted.
const WAKATIME_API_DOMAINS = ["wakatime.com", "wakapi.dev"];
const WAKATIME_USERNAME_REGEX = /^[\w-][\w.-]*$/;

/**
 * WakaTime data fetcher.
 *
 * @param {{username: string, api_domain: string }} props Fetcher props.
 * @returns {Promise<import("./types").WakaTimeData>} WakaTime data response.
 */
const fetchWakatimeStats = async ({ username, api_domain }) => {
  if (!username) {
    throw new MissingParamError(["username"]);
  }

  if (!WAKATIME_USERNAME_REGEX.test(username)) {
    throw new Error("Invalid WakaTime username.");
  }
  const requestedDomain = api_domain
    ? api_domain.replace(/\/$/, "")
    : "wakatime.com";
  const domain = WAKATIME_API_DOMAINS.find(
    (allowed) => allowed === requestedDomain,
  );
  if (!domain) {
    throw new Error(
      `Unsupported api_domain, use one of: ${WAKATIME_API_DOMAINS.join(", ")}.`,
    );
  }

  try {
    const { data } = await axios.get(
      `https://${domain}/api/v1/users/${username}/stats?is_including_today=true`,
    );

    return data.data;
  } catch (err) {
    if (err.response.status < 200 || err.response.status > 299) {
      throw new CustomError(
        `Could not resolve to a User with the login of '${username}'`,
        "WAKATIME_USER_NOT_FOUND",
      );
    }
    throw err;
  }
};

export { fetchWakatimeStats };
export default fetchWakatimeStats;
