---
title: "Getting Started with the Linux Terminal"
date: "2014-04-22"
excerpt: "A practical introduction to the Linux command line for developers making the switch from Windows or macOS."
tags: ["linux", "terminal", "tools"]
---

The terminal is one of those things that seems intimidating at first but becomes indispensable once you get the hang of it. This is a quick-start guide for developers who are new to Linux.

## Why bother?

Most web servers run Linux. Learning to navigate the terminal means you can work directly on your servers, automate repetitive tasks, and generally feel less helpless when things go wrong in production.

## Basic navigation

```bash
pwd          # print working directory
ls -la       # list files (including hidden ones)
cd ~/projects  # change directory
```

## Useful shortcuts

- `Ctrl+R` — search command history
- `Ctrl+A` / `Ctrl+E` — jump to start / end of line
- `!!` — repeat last command
- `Tab` — autocomplete

## A few commands I use every day

```bash
# Search inside files
grep -r "TODO" ./src

# Find files by name
find . -name "*.js" -not -path "*/node_modules/*"

# Watch a log file in real time
tail -f /var/log/nginx/access.log
```

The more time you spend in the terminal, the more you find yourself reaching for it even when a GUI is available. It's a good habit to build early.
