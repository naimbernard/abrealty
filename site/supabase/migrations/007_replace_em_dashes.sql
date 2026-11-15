-- Replaces em dashes (—) and en dashes (–) in listing and requirement copy
-- with a plain hyphen (-). Idempotent: safe to run more than once.

update public.properties set
  title = replace(replace(title, '—', '-'), '–', '-'),
  badge = replace(replace(badge, '—', '-'), '–', '-'),
  location = replace(replace(location, '—', '-'), '–', '-'),
  bua = replace(replace(bua, '—', '-'), '–', '-'),
  sbua = replace(replace(sbua, '—', '-'), '–', '-'),
  plot_size = replace(replace(plot_size, '—', '-'), '–', '-'),
  hook_line = replace(replace(hook_line, '—', '-'), '–', '-'),
  summary = replace(replace(summary, '—', '-'), '–', '-'),
  description = replace(replace(description, '—', '-'), '–', '-'),
  highlights = replace(replace(highlights, '—', '-'), '–', '-'),
  completion_date = replace(replace(completion_date, '—', '-'), '–', '-')
where concat_ws(' ', title, badge, location, bua, sbua, plot_size, hook_line,
  summary, description, highlights, completion_date) ~ '[—–]';

update public.requirements set
  title = replace(replace(title, '—', '-'), '–', '-'),
  details = replace(replace(details, '—', '-'), '–', '-'),
  budget_range = replace(replace(budget_range, '—', '-'), '–', '-'),
  locations = replace(replace(locations, '—', '-'), '–', '-')
where concat_ws(' ', title, details, budget_range, locations) ~ '[—–]';
