---
title: "React Component Patterns Worth Knowing"
date: "2017-02-15"
excerpt: "A look at the component patterns that were shaping React development in 2017 — some still relevant, some superseded by hooks."
tags: ["react", "javascript", "frontend"]
---

![React patterns](/images/Screen-Shot-2017-02-15-at-10.14.56-AM.png)

React had been around a few years by 2017, and the community had settled on some clear patterns for building maintainable components. Here are the ones I found most useful.

## Presentational vs. Container Components

The idea: separate *how things look* from *how things work*.

**Presentational component** — just renders UI, receives everything via props:

```jsx
function UserCard({ name, email, avatarUrl }) {
  return (
    <div className="card">
      <img src={avatarUrl} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
```

**Container component** — handles data fetching and state, passes data down:

```jsx
class UserCardContainer extends React.Component {
  state = { user: null };

  componentDidMount() {
    fetchUser(this.props.userId).then(user => this.setState({ user }));
  }

  render() {
    if (!this.state.user) return <Spinner />;
    return <UserCard {...this.state.user} />;
  }
}
```

This pattern is less necessary with hooks (just use `useEffect` + `useState` in the same component), but the underlying principle — keeping display logic separate from data logic — is still sound.

## Higher-Order Components (HOCs)

A function that takes a component and returns an enhanced version:

```jsx
function withLoading(WrappedComponent) {
  return function({ isLoading, ...props }) {
    if (isLoading) return <Spinner />;
    return <WrappedComponent {...props} />;
  };
}

const UserListWithLoading = withLoading(UserList);
```

HOCs have largely been replaced by hooks in modern React, but you'll still see them in older codebases.

## Render Props

```jsx
<DataProvider render={data => <UserCard user={data} />} />
```

Also mostly replaced by hooks now, but elegant in its time.

---

The React ecosystem moves fast. What matters is understanding *why* these patterns existed — what problem they solved — not just memorizing the syntax.
