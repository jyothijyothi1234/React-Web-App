import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Heading() {
  const [value, setValue] = React.useState(5);

  const Pricedetails = [
    {
      name: "Fancy Product",
      dollar: "$40.00 - $80.00",
      button: "View options",
    },
    {
      name: "Special Item",
      dollar: "$20.00 $18.00",
      button: "Add to Cart",
    },
    {
      name: "Sale Item",
      dollar: "$50.00 $25.00",
      button: "Add to Cart",
    },
    {
      name: "Popular Item",
      dollar: "$40.00",
      button: "Add to Cart",
    },
    {
      name: "Sale Item",
      dollar: "$50.00 $25.00",
      button: "Add to Cart",
    },
    {
      name: "Fancy Product",
      dollar: "$120.00 - $280.00",
      button: "View options",
    },
    {
      name: "Special Item",

      dollar: "$20.00 $18.00",
      button: "Add to Cart",
    },
    {
      name: "Popular Item",
      dollar: "$40.00",
      button: "Add to Cart",
    },
  ];

  return (
    <Grid container item xs={12} justifyContent={"center"}>
      <Grid
        container
        item
        xs={8}
        justifyContent="space-between"
        alignItems={"center"}
        paddingTop={"30px"}
      >
        <Grid container item xs={4}>
          <Grid item xs={6}>
            <Typography variant="h5" component="h5" fontSize={24}>
              Start Bootstrap
            </Typography>
          </Grid>

          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "7px",
            }}
          >
            <Typography variant="h5" component="h5" fontSize={18}>
              Home
            </Typography>

            <Typography variant="h5" component="h5" fontSize={18}>
              About
            </Typography>

            <Typography variant="h5" component="h5" fontSize={18}>
              Shop
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={1}>
          <Button
            variant="outline"
            sx={{ height: "50px", border: "1px solid black" }}
          >
            <img
              src="data:image/png;base64,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"
              alt="not found"
              height="40%"
            />
            Cart
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAaVBMVEUAAAD///+9vb34+Pjg4ODExMT8/Pzl5eXz8/PLy8ulpaVXV1eSkpIeHh7q6urIyMgnJyebm5tiYmILCwtycnLX19cTExNPT0+2trarq6tqamotLS03NzdISEh4eHjR0dFBQUGKioqAgIBflp2rAAAG1klEQVR4nO2c69KyOgyFEQE5Kyp4QkXu/yI/PAAttLDSAvPO7L1+Cz7WNk3SpMZKXe4m9Wz/Ve7vtyg7GIcs2+XBsQzP26cVa7x3ZagCmeE1yDNDot39Wl6sBaHW6fkhg+no5HsqQ0aGSpNgByJ9dD+azrxQaXKjANV6mO5cUI4ZRCpIn/EKKVgwVOyT/jXBcD2nhnKTXA+p0mGPLkcIyvWla5+mYzoZ1PY+DVKl6LWeBCpGjRKmmzkBlKm84mR6jC7EEaj1tMP01W2rBZVON5s4JRpQ9jxIlfaD830IKpmNqdqqh2zWANScTNXEGjBZcqjjrEyVybLJUM5rZqZK0rGSQc1hCro6yMZKAuUvwFRRSWa7GGoZJsPIxVRCqOdCTJXzB0Olmu4cRVeRAy+COi3HJN5xBFALGANWHgLlLctkFH1PpgflTuT54jqOQ4VLMxlGz4Z2oZazBq3ybmjfhVp05dUKh6EuGq8+qD+aDkG5Bf2FUf5IbC+1NhsrfXp+WShEGo8hKPKedw/7uYv1Ngmo7+FDeg7KpcXm0eMpiZbc9EXbqgI5FG2gwo2Y6Ks4Ic0xLupioUgDNZ6t2FAcam5jZqFM/B3ZZQzprTNhzrO/kYXCbZTEOespLuBXspsNA/WEd70Azq66e/SdO2aGMlDwrndCkd6CqXwR1BpdxHdSVnWN2qx7O9VbKNSPimiZ3pWD/th2nrZQV/BZeWArkQcarLIPFYNGaiSLIxK4yxdNJqaBAtM+NzrTalVAr84ab72BAsMFPBnO6In9gY1bVUM52K+5qjCh8/VUr78aKoYeMwb3YLnAt9c2uYY6Q0/t1ZhQE1ovbIP0lNKMeguLR+rJ8YNyoM34hBwXCLXG3u9wUFhOw5d/65gg/7HOg/6gMFdK47Qam+omBwVlggP5d44LOiZIOCjIc9X498CffeSgoKNhQdIG1xb5hhsL5SJPFFoFEJhn7DJQFvKAsuX8CnL2LAYKWnzdNARR0I5vMlDQLCR7d7ygH54wUCXygNaUqmJT5DseDBSy8x2U95ivoMW0J0IV5JIVXg7ibwctlItsl4r+XQuFLL9v+PaB2hTA5zUXHzZx800DZSEjqxDG8EIi8JvVQEGOC5RnGRJid6K0gYJSG0DlxbCg8M9roKCYTxsKCgPsBgoytpoGHfwWkwR1GKsF+R/qp0zLxXsLn7kLQv1X/r4/ufoWslNLQ0EWvYWC1sVZFwryubcNFJQY1gpF30K8hOzZQKXIGcoi/tSt9RIsJEAuh79yVJDnmbf+1AZyn5fw0b9R+NdHR1IiO02oNfAdRrBuoLCQmnj80RUU91FDLHkJHSbIGF4ZKChC1rQJ0MldyEBBGUnNwA/6Ny4MFGTS1XPDb2F1GCkDBaVJI+Us+lvYAVvMQEHLVS/yg7bjzGGgVgXyiNakgqzOL1n4g8IKYDUmFfZfhBwUVlCi4b1gp6NnDgo7F9X4/6ATv3op/aCgLfnn7agIK8SoiwvqozWsekDZp8IKMepzlhoKPEJW3JSxad7YnBoKLJVQHCqwMKsul6ihwN8SKbkKkGdbuZ3dg220UKZfvgoInBuv+vMNFFpMqRAop9RXN1AWWCdDP8tywbqgtjC2LcBBS4rIh1loaV5rmlsouBiWmLvGKh4MdmK0UNDZyUckv9hEKyujdrtnyt/wVhnCxpzChX6MCWSgCD1q8FjhLYusBWSgwMKg78/CXKszXhXL1hewdZ6Uuu8AqPR0ocjtJzalypXpUoqQM39ssExK1S8XKnEFzbSOvvvgfPfQwsOvuHdxUDGxnb7wY3HWw7WJFen8sStfJE9ufjwc+1c1xOcXueecH/ROO4FCB3sW7UPz107g2ckxV2gnCNYDUFqNFxrquB5/okWlGyX9hWaeXkNkr+1p3kZfoXo5ih4UXAE+mfrdkP1WulSjU0hFUb+gVdB0uPAfKEgwidoz4Q6AKSQKj0RQUJXJRBL2JghbfqFquEkUCWMjcXM0oa1HT+IoUtJGvhCV5Fxa1nC/yBKUufrS+xIW2JqlTqL8EofZx0oeEg1cdzHzvBrIlAxdDGLPuA0O3u0yeIWKVczFdB/s4Bi+bMad6daLkZt5xu4KmmURjh3yjF5gtJncQT6NNt+MX/Xk+NM6WP74Afk4VBXIHafDuiLZSQSqisHJLdhinbAiLAxq5UyBdbLB0gYQqpKt6ZAG+M2COFS1EMtClSh/UG6HpEC9cxe0BE89SGdaCx4NavW+M/NKGq98fyEfB5ChKsVeAt51dgttlTZFFaiPrEt5LaRuRJTvH8lT9SBcGeqt2Hpuz2F5DPJd9rmPNbqdrmV42XrWRqew6R9xIVbVZVZXJgAAAABJRU5ErkJggg=="
              alt="not found"
              height="40%"
            />
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        justifyContent={"center"}
        marginTop={"30px"}
        sx={{ bgcolor: "darkblue" }}
      >
        <Grid item xs={4} height={"400px"} paddingTop={"8%"}>
          <Typography
            variant="h5"
            component="h5"
            sx={{ fontSize: "3.5rem", color: "white" }}
          >
            Shop in style
          </Typography>

          <Typography
            variant="h5"
            component="h5"
            sx={{ fontSize: "1.20rem", color: "white" }}
          >
            With this shop homepage template
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        justifyContent={"space-evenly"}
        paddingTop={"100px"}
      >
        {Pricedetails?.map((item) => (
          <Grid
            item
            xs={2}
            marginLeft={"70px"}
            paddingBottom={"70px"}
            marginRight={"70px"}
            paddingRight={"10px"}
          >
            <Card
              sx={{ minWidth: 250, minHeight: "450px", textAlign: "center" }}
            >
              <CardContent>
                <img
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="not found"
                  width={"270px"}
                />

                <Typography
                  sx={{
                    fontSize: "1.25rem",
                    paddingTop: "20px",
                    fontWeight: "bold",
                    lineHeight: "2",
                  }}
                >
                  {item?.name}

                  <Rating name="read-only" value={value} readOnly />

                  <Typography>{item?.dollar}</Typography>
                </Typography>
              </CardContent>
              <br />
              <br />

              <Button variant="outlined">{item?.button}</Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "50px",
          bgcolor: "darkblue",
        }}
      >
        <Typography variant="h5" component="h5" fontSize={18}>
          Copyright © Your Website 2023
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Heading;
