import { useEffect, useState } from 'react';
import { personalData, skills, experience, projects, uiText, terminalLines } from './assets/data/personal-data.js';
import { API_URL } from './api-url.js';

// The data built into the site. Shown straight away, and kept if the API is down.
const builtIn = { uiText, personalData, terminalLines, skills, projects, experience };

// true when the API sent something worth showing (not an empty text)
const hasText = (value) =>
  typeof value === 'string' ? value.trim() !== '' : typeof value === 'object' && value !== null && hasText(value.en);

const mergePersonalData = (api = {}) => {
  const merged = { ...personalData };
  for (const key of Object.keys(api)) {
    if (key !== 'socialLinks' && hasText(api[key])) merged[key] = api[key];
  }
  merged.socialLinks = { ...personalData.socialLinks, ...api.socialLinks };
  return merged;
};

// Use the API's data where it has some, and the built-in data where it has none,
// so an empty database never blanks the site.
const mergeWithBuiltIn = (api) => ({
  uiText: { ...uiText, ...api.uiText },
  personalData: mergePersonalData(api.personalData),
  terminalLines: api.terminalLines?.length ? api.terminalLines : terminalLines,
  skills: api.skills?.length ? api.skills : skills,
  projects: api.projects?.length ? api.projects : projects,
  experience: api.experience?.length ? api.experience : experience,
});

export function useSiteData() {
  const [data, setData] = useState(builtIn);

  useEffect(() => {
    if (!API_URL) return;
    const controller = new AbortController();
    fetch(`${API_URL}/public/site-data`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((api) => setData(mergeWithBuiltIn(api)))
      .catch(() => {}); // API down or asleep: keep the built-in data
    return () => controller.abort();
  }, []);

  return data;
}
