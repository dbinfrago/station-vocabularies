# station-vocabularies

[Linked data](https://data.europa.eu/en/publications/datastories/linking-data-what-does-it-mean) vocabularies\* for describing passenger railway stations, following the [NeTEx](https://netex-cen.eu)/[Transmodel](https://transmodel-cen.eu) standards, as well as [RML mappings](https://rml.io/specs/rml/) to generate linked data from NeTEx XML files. **Currently work in progress.**

\*also referred to as _ontologies_

## Vocabularies

Title (Status\*) | Description | Preferred prefix | Base URI\* | Download\*
---------------- | ----------- | ---------------- | ---------- | ----------
**NeTEx fixed object vocabulary** (experimental) | Linked data ontology for representing [NeTEx](https://netex-cen.eu)/[Transmodel](https://transmodel-cen.eu) datasets, with focus on the so-called "fixed object model" – a successor to the former IFOPT standard – which can be used to describe railway stations, station equipments, points of interest, and more. See [_design philosophy_](#design-philosophy) for more details. | `netex` or `netexFO` | `https//lod.bahnhof.de/ vocabulary/netex` | [here](https://dbinfrago.github.io/station-vocabularies/ontologies/netex.ttl)
**DB station vocabulary** (experimental) | Linked data ontology containing Deutsche Bahn specific properties which are not part of Transmodel/NeTEx (e.g. DB station identifiers). | `bahnhof` | `https//lod.bahnhof.de/ vocabulary/db` | [here](https://dbinfrago.github.io/station-vocabularies/ontologies/db.ttl)

\*see [caveats](#caveats)

## Caveats

There are several shortcomings to be aware of while this project is still under development:

- The NeTEx vocabulary does not include all (or even a majority of) NeTEx fixed objects classes and properties yet. Be aware of this when using [our RML mappings](#mappings-for-converting-xml-to-linked-data) to generate linked data from NeTEx XML files – the results might not include all attributes from your source data.
- Class and property descriptions in the ontologies as well as other metadata might still be opaque, verbose or not present at all. We intend to amend and improve them over time.
- The vocabularies still have experimental status, they should not be used productively yet.
- `sameAs` references to other vocabularies are often still missing (see also: [_design philosophy_](#design-philosophy)).
- Blank nodes (entities without IDs) are not supported by [our RML mappings](#mappings-for-converting-xml-to-linked-data) yet, applying the mappings to datasets which contain such entities might result in unexpected behaviour.
- For technical reasons, vocabulary definitions cannot be retrieved via their linked data URIs just yet, we therefore provide a separate download URL for ontologies here for the time being.

## Design philosophy

When creating a linked data representation of a dataset, it is usually recommended to re-use existing terms from other vocabularies instead of introducing new ones. One example for this could be the property `name`, for which one could re-use [`foaf:name`](http://xmlns.com/foaf/0.1/name) of the FOAF vocabulary instead of creating a new `my-vocabulary:name`.

However, with a model as large as that defined in the NeTEx/Transmodel standards, creating a mapping to linked data terms using mostly existing vocabularies would become quite burdensome, as one would probably need to combine classes and properties from many other vocabularies, creating a patchwork which might be hard to document and understand.

We therefore chose a different approach: Our `netexFO` ontology re-defines _all_ NeTEx classes and properties, but also contains `sameAs` references to existing vocabularies, wherever possible. This should make it a lot easier to understand the ontology while still leveraging the power of linked data and re-used vocabularies (as least if the consuming system supports reasoning using `sameAs` properties).

Some additional practical conventions we used for mapping NeTEx terms to linked data:
- all classes begin with an uppercase letter (`AccessSpace` → `netexFO:AccessSpace`)
- all properties begin with a lowercase letter (`PrivateCode` → `netexFO:privateCode`)
- properties always use singular case (`levels` → `netexFO:level`)
- we make no distinction between in-place and referenced types (`Quay`, `QuayRef` → `netexFO:Quay`)

## Mappings for converting XML to linked data

As mentioned above, this repository also contains mappings to create linked data sets from NeTEx XML dumps. Alongside the ontologies, we generate so-called [RML mappings](https://rml.io/specs/rml/), which **[can be downloaded here](https://dbinfrago.github.io/station-vocabularies/rml/mapping.ttl)**, to be used with tools such as [rmlmapper](https://github.com/RMLio/rmlmapper-java) to generate RDF datasets:

```sh
# assuming you downloaded our rml mappings to mapping.ttl
# assuming you have java installed and downloaded rmlmapper to rmlmapper.jar
# assuming your NeTEx xml file is present in the same directory and called "index.xml" (the name is hard-coded, unfortunately)
java -jar ./rmlmapper.jar -m mapping.ttl -s turtle --strict \
  --base-iri "https://base-uri-to-be-used-for-entities-in-your-dataset.org/some-path/" > ./output.ttl
```

## License

The ontology and RML mappings are released to the public domain (under the [CC0 “license”](https://creativecommons.org/publicdomain/zero/1.0/)), all other code is released under the [APACHE 2.0 license](https://www.apache.org/licenses/LICENSE-2.0).

## Contributing

If you found an error or inconsistency, have a question or want to propose a new entity, property, etc., feel free to visit [the issues page](https://github.com/dbinfrago/station-vocabularies/issues).

You're also invited to contribute directly by creating a [pull request](https://github.com/dbinfrago/station-vocabularies/pulls).

_Note that, by participating in this project, you commit to the [code of conduct](CODE-OF-CONDUCT.md), and agree to the release of your contributions under the [APACHE 2.0 license](https://www.apache.org/licenses/LICENSE-2.0) (for the code) and to the public domain (under the [CC0 “license”](https://creativecommons.org/publicdomain/zero/1.0/), for the ontology and RML artifacts), respectively._
