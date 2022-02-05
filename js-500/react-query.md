# useQuery

```js
const {data, isLoading} = useQuery(
    'super-heroes',
    () => axios.get('http://localhost:4000/superheroes')
);
```

```js
const fetch = () => axios.get('http://localhost:4000/superheroes');

const {data, isLoading} = useQuery(
    'super-heroes',
    fetch
);
```

# Handling query error
use error properties `useQuery` hook returns

```js
const {isError, error} = useQuery(/*SOME CODE HERE*/);
```

# useQuery on click
use `refetch` prop returned by `useQuery` hook in event handler.


# Success and Error Callbacks


# Cache
by default every request is cached for 5 minutes
what is background refetching?
useQuery hook returns `isetching` flag to outline background re-fetching

# Stale Time
allows to reuse obtained data for subsequent requests.
If your data is not changed often and youy doesn't want to request server every time, you can provide `useQuery` hook with `staleTime` property.

# Refetch Defaults
refetchOnMount refetch stale data each time component mounted
refetchOnWindowFocus if you fetch data and then switch tab to return after a while, data will be refetched as soon as window is focused.

# Polling
Fetching data at regular intervals
`refetchInterval` prop
polling is paused when window looses focus
to override this you can use `refetchIntervalInBackground` configuration

# Data Transformation
`select` config prop. its a function receiving responce data as an argument

Custom Query Hook

# Query by ID
specify dynamic qurey part in `queryKey` otherwise RQ will reuse cached data for all queries (id 1,2,3...)

#  Dependent Queries
use logical flag in `enabled` query config
