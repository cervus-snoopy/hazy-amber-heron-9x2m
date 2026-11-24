#!/usr/bin/env python3
"""Post the Meme, Win the Feed — entry for
u-myronera-post-the-meme-win-the-feed-2de960bf.

The entry is an X post carrying the meme. This program prints
the post's address, which POST.json at the repository root names.
"""

import json
from pathlib import Path


def entry_post_url() -> str:
    """Return the X post address recorded in POST.json."""
    post_file = Path(__file__).resolve().parent / "POST.json"
    with post_file.open(encoding="utf-8") as handle:
        payload = json.load(handle)
    address = str(payload["url"])
    if not address.startswith("https://x.com/"):
        raise ValueError("POST.json does not name an x.com post address")
    return address


def main() -> None:
    print(entry_post_url())


if __name__ == "__main__":
    main()
