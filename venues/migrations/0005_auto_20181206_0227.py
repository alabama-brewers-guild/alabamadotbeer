# Generated by Django 2.1.3 on 2018-12-06 02:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("venues", "0004_auto_20181106_0314"),
    ]

    operations = [
        migrations.AlterField(
            model_name="venue",
            name="tap_list_provider",
            field=models.CharField(
                blank=True,
                choices=[
                    ("untappd", "Untappd"),
                    ("digitalpour", "DigitalPour"),
                    ("taphunter", "TapHunter"),
                    ("nook_html", "The Nook's static HTML"),
                    ("manual", "Chalkboard/Whiteboard"),
                    ("", "Unknown"),
                    ("test", "TEST LOCAL PROVIDER"),
                ],
                max_length=30,
                verbose_name="What service the venue uses for digital tap lists",
            ),
        ),
    ]
