"""hello-faf reference API. Illustrative — the DSN in project.faf is a shape, not a live server."""
from fastapi import FastAPI

app = FastAPI(title="hello-faf")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "project": "hello-faf"}
