# -*- coding: utf-8 -*-
import datetime

from django import template


register = template.Library()


@register.filter
def chunk(iterable, n):
    chunks = []
    for i in range(0, len(iterable), n):
        chunks.append(iterable[i : i + n])

    return chunks
