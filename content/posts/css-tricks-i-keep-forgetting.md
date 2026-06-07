---
title: "CSS Tricks I Keep Forgetting"
date: "2014-04-27"
excerpt: "A running list of CSS snippets that I have to look up every single time — so I'm putting them here instead."
tags: ["css", "frontend", "tips"]
---

I've been doing front-end work long enough that I should have these memorized. I don't. So here's the cheat sheet I keep coming back to.

## Vertically center anything (modern way)

```css
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Full-height sticky footer

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

footer {
  margin-top: auto;
}
```

## Custom scrollbar (Webkit)

```css
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}
```

## Truncate text with ellipsis

```css
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## Multi-line clamp

```css
.clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

I'll keep adding to this as I inevitably forget more things.
